import React, { useEffect, useState } from 'react';
import Menu from '../menu/Menu';
import {dataMenu} from '../../data';
import './home.scss';      
import { Link } from 'react-router-dom';
import Category from '../category/Category';
import Itemtask from '../ItemTask/Itemtask';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { db } from '../../firebase';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { CategoryType } from '../../models/CategoryType';
import { TaskType } from '../../models/TaskType';
import { startOfDay, endOfDay } from 'date-fns';



export default function Home() {
    const [userEmail, setUserEmail] = useState('');
    const [categoryData, setCategoryData] = useState<CategoryType[]>([]);
    const [taskData, setTaskData] = useState<TaskType[]>([]);
    const [keyword, setKeyword] = useState('');

    //Get Data to firestore
    const fetchPost = async () => {
        try {
            const q = query(collection(db, "category"), orderBy("id", "asc"));
            const querySnapshot = await getDocs(q);
            const newData = querySnapshot.docs.map(doc => ({
                id: doc.data().id,
                icon: doc.data().icon,
                label: doc.data().label,
                color: doc.data().color
            }));
            setCategoryData(newData);
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }
    }

    //Get Data Task to firestore
    const fetchTask = async () => {
        try {
            const today = new Date();
            const startOfToday = startOfDay(today); // Début de la journée actuelle
            const endOfToday = endOfDay(today);
            const q = query(collection(db, "tasks"), where("date", ">=", startOfToday), where("date", "<=", endOfToday), orderBy("date", "asc"));
            const querySnapshot = await getDocs(q);
            const newData = querySnapshot.docs.map(doc => {
                // Convertir le timestamp Firestore en objet Date
                const timestampSeconds = doc.data().time.seconds;
                const timestampMilliseconds = timestampSeconds * 1000;
                const date = new Date(timestampMilliseconds);
                
                // Formater l'heure et les minutes
                const heure = ('0' + date.getHours()).slice(-2);
                const minute = ('0' + date.getMinutes()).slice(-2);
                const formattedTime = `${heure}:${minute}`;

                return {
                    id: doc.data().id,
                    task: doc.data().task,
                    date: doc.data().date.seconds,
                    category: doc.data().category,
                    time: formattedTime,
                    notes: doc.data().notes,
                    state: doc.data().state
                }
            });
            setTaskData(newData);
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }
    }

    const searchTask = async (keyword: string) => {
    try {
        if (keyword.trim() === '') {
            // If keyword is empty, fetch all tasks again
            fetchTask();
        } else {
            const filteredTasks = taskData.filter(task => {
                // Convert task name and notes to lowercase for case-insensitive search
                const taskName = task.task.toLowerCase();
                const taskNotes = task.notes ? task.notes.toLowerCase() : '';

                // Check if either task name or notes contain the keyword
                return taskName.includes(keyword.toLowerCase()) || taskNotes.includes(keyword.toLowerCase());
            });

            // Update the task data with filtered tasks
            setTaskData(filteredTasks);
            setKeyword('');
        }
    } catch (error) {
        console.error("Error filtering tasks: ", error);
    }
};

    


    const logout = () => {
        signOut(auth).then(() => {
            console.log('signOut')
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        fetchPost();
        fetchTask();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email|| '');
            } else {
                setUserEmail('');
            }
        });
        // Cleanup subscription
        return () => unsubscribe();
        
    }, []);

    return (
        <div className="appBlock">
            <div className="appTopBlock">
                <div className="appUser">
                    <div className="appUserCol">
                        <div className="imgUser">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt=""/>
                        </div>
                        <p>{userEmail && `${userEmail}`}</p>
                    </div>
                    <div className="appUserCol">
                        <button className='btn btn-icon' onClick={logout}><i className="icon-log-out"></i></button>
                    </div>
                </div>
                <div className="appSearchBlock">
                    <button className='btn btn-icon btn-logout' onClick={() => searchTask(keyword)}><i className='icon-search'></i></button>
                    <input type="text" placeholder="Search for Tasks, Events" value={keyword} onChange={(e) => setKeyword(e.target.value) }/>
                </div>
            </div>
            <div className="appItem">
                <h2 className="title-h2">Categories</h2>
                <div className="listCategory">
                    {categoryData.map((item, index) => <Category key={index} icon={item.icon} label={item.label} color={item.color}/>)}
                </div>
            </div>
            <div className="appItem">
                <div className="appTop"><h2 className="title-h2">Today's task</h2>
                <Link className="btn btn-link" to="/task">See all</Link>
                </div>
                <div className="listTask">
                    {taskData.map((item, index) => <Itemtask key={index} id={item.id} task={item.task} time={item.time}/>)}
                </div>
            </div>
            <Menu {...dataMenu}/>
        </div>
    );
}
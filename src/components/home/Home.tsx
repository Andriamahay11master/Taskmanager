import React, { useEffect, useState } from 'react';
import Menu from '../menu/Menu';
import {dataMenu, listTasks} from '../../data';
import './home.scss';      
import { Link } from 'react-router-dom';
import Category from '../category/Category';
import Itemtask from '../ItemTask/Itemtask';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { db } from '../../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { CategoryType } from '../../models/CategoryType';



export default function Home() {
    const [userEmail, setUserEmail] = useState('');
    const [categoryData, setCategoryData] = useState<CategoryType[]>([]);

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

    const searchTask = () => {
        console.log('searchTask')
    }

    const logout = () => {
        signOut(auth).then(() => {
            console.log('signOut')
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        fetchPost();
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
                    <button className='btn btn-icon btn-logout' onClick={searchTask}><i className='icon-search'></i></button>
                    <input type="text" placeholder="Search for Tasks, Events"/>
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
                    {listTasks.map((item, index) => <Itemtask key={index} task={item.task} time={item.time} />)}
                </div>
            </div>
            <Menu {...dataMenu}/>
        </div>
    );
}
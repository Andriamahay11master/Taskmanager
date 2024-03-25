
import Menu from '../menu/Menu';
import {dataMenuWithoutAdd} from '../../data';
import './task.scss';
import Itemtask from '../ItemTask/Itemtask';
import { Link } from 'react-router-dom';
import { TaskType } from '../../models/TaskType';
import { useEffect, useState } from 'react';
import { endOfDay, startOfDay } from 'date-fns';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Task() {

    const [taskData, setTaskData] = useState<TaskType[]>([]);

    //Get Data Task to firestore
    const fetchTask = async () => {
        try {
            const q = query(collection(db, "tasks"), orderBy("date", "desc"));
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

                const dateTask = new Date(doc.data().date.seconds * 1000);
                const dayL = dateTask.toDateString();
                const day = ('0' + dateTask.getDate()).slice(-2);
                const month = ('0' + (dateTask.getMonth() + 1)).slice(-2);
                const year = dateTask.getFullYear();
                const dataTaskF = `${day}/${month}/${year}`;

                return {
                    id: doc.data().id,
                    task: doc.data().task,
                    date: dayL.toString(),
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

    useEffect(() => {
        fetchTask();
    }, []);
    return (
        
        <div className="appBlock">
            <div className="appItem">
                <h2 className="title-h2">All tasks</h2>
                <div className="listTask">
                    {taskData.map((item, index) => <Itemtask key={index} task={item.task} time={item.time} date={item.date}/>)}
                </div>
            </div>
            <div className="appAdd">
                <Link to="/addTask" className="btn btn-primary"><i className="icon-plus"></i></Link>
            </div>
            <Menu {...dataMenuWithoutAdd}/>
        </div>
    )
}
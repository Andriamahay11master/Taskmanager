
import Menu from '../menu/Menu';
import {dataMenu} from '../../data';
import './calendar.scss';
import { DateCalendar } from '@mui/x-date-pickers';
import Itemtask from '../ItemTask/Itemtask';
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { TaskType } from '../../models/TaskType';

export default function Calendar() {

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
                <h2 className="title-h2">Calendar</h2>
                <DateCalendar />
            </div>
            <div className="appItem">
                <div className="listTask">
                    {taskData.map((item, index) => <Itemtask key={index} id={item.id} task={item.task} time={item.time} date={item.date}/>)}
                </div>
            </div>
            <Menu {...dataMenu}/>
        </div>
    )
}
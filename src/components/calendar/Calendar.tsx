
import Menu from '../menu/Menu';
import {dataMenu} from '../../data';
import './calendar.scss';
import { DateCalendar } from '@mui/x-date-pickers';
import Itemtask from '../ItemTask/Itemtask';
import { useEffect, useState } from 'react';
import { Timestamp, collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { TaskType } from '../../models/TaskType';
import { endOfDay, startOfDay } from 'date-fns';

export default function Calendar() {

    const [taskData, setTaskData] = useState<TaskType[]>([] || null);
    const [dateSelected, setDateSelected] = useState<Timestamp | null>(null);
     //Get Data Task to firestore
     const fetchTask = async () => {
        try {
            const today = dateSelected && dateSelected.toDate();
            const startOfToday = startOfDay(today || new Date()); // Début de la journée actuelle
            const endOfToday = endOfDay(today || new Date());
            const q = query(collection(db, "tasks"), where("date", ">=", startOfToday), where("date", "<=", endOfToday) ,orderBy("date", "desc"));
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
    }, [dateSelected]);

    return (
        
        <div className="appBlock">
            <div className="appItem">
                <h2 className="title-h2">Calendar</h2>
                <DateCalendar value={dateSelected} onChange={(newValue) => setDateSelected(newValue)}/>
            </div>
            <div className="appItem">
                <div className="listTask">
                    {taskData.length > 0 ? 
                        taskData.map((item, index) => 
                            <Itemtask key={index} id={item.id} task={item.task} time={item.time} date={item.date}/>
                        ) 
                        : 
                        <p>No tasks found in this date</p>
                    }
                </div>
            </div>
            <Menu {...dataMenu}/>
        </div>
    )
}
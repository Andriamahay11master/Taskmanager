import React, { useEffect, useState } from 'react'
import './detailtask.scss'
import { Link, useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { TaskType } from '../../models/TaskType';
import Menu from '../menu/Menu';
import { dataMenuWithoutAdd } from '../../data';



export default function Detailtask() {
    let { id } = useParams();

    let idConverted = parseInt(id ?? '0');

    const [taskData, setTaskData] = useState<TaskType[]>([]);

    const fetchPost = async () => {
        try {
            const q = query(collection(db, "tasks"), where("id", "==", idConverted));
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
                time: formattedTime,
                category: doc.data().category,
                notes: doc.data().notes,
                state: doc.data().state
                }
            });
            setTaskData(newData);
            console.log("data",newData[0]);
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }
    }

    const task = taskData[0]?.task;
    const date = taskData[0]?.date;
    const time = taskData[0]?.time;
    const category = taskData[0]?.category;
    const notes = taskData[0]?.notes;

    useEffect(() => {
        fetchPost();
    }, [id]);

    return (
    
    <div className="appBlock">
        <div className="appItem">
            <div className="detailTask">
                    <div className="detailTask-top">
                        <h2 className="title-h2">Detail Task</h2>
                    </div>
                    <div className="detailTask-bottom">
                        <div className="detailTask-info">
                            <div className="detailTask-info-top">
                                <div className="detailTask-top-col">
                                    <p className='detail-title'>{task}</p>
                                    <p className='detail-time'><span>Category :</span> {category}</p>
                                </div>
                                <div className="detailTask-top-col">
                                    <span className='detail-time'>{date}</span>    
                                </div>
                            </div>
                            <div className="detailTask-info-bottom">
                                <div className="detailTask-bottom-col">
                                    <p className='detail-time'><span>Time :</span>{time}</p>
                                </div>
                                <div className="detailTask-bottom-col">
                                    <Link className="btn btn-primary" to={`/reschedule/${id}`}>Reschedule</Link>
                                </div>
                            </div>
                        </div>
                        <div className="detailTask-content">
                            <h3 className="title-h3">Details</h3>
                            <p>{notes}</p>
                        </div>
                    </div>
            </div>
        </div>
        <Menu {...dataMenuWithoutAdd}/>
    </div>
    )
}
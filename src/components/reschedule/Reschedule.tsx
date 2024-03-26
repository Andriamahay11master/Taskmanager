import React, { useEffect, useState } from 'react'
import './reschedule.scss'
import { Link, useParams } from 'react-router-dom'
import { Timestamp, collection, doc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { TaskType } from '../../models/TaskType';
import Menu from '../menu/Menu';
import { dataMenuWithoutAdd } from '../../data';
import { Poppin } from '../poppin/Poppin';
import { CategoryType } from '../../models/CategoryType';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';



export default function Reschedule() {
    let { id } = useParams();

    let idConverted = parseInt(id ?? '0');

    const [taskData, setTaskData] = useState<TaskType[]>([]);
    const [categoryData, setCategoryData] = useState<CategoryType[]>([]);
    const [success, setSuccess] = useState(false);
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState<Timestamp | null>(null);
    const [time, setTime] = useState<Timestamp | null>(null);
    const [notes, setNotes] = useState('');
    const [currentDocument, setIdCurrentDocument] = useState('');

    const fetchPostCategory = async () => {
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

                const taskID = doc.id;
                setIdCurrentDocument(taskID)

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
            console.log("taskData",taskData);
            setTask(taskData[0]?.task);
            setCategory(taskData[0]?.category);
            setNotes(taskData[0]?.notes);
            setDate(Timestamp.fromDate(new Date(taskData[0]?.date)));
            setTime(Timestamp.fromDate(new Date(taskData[0]?.time)));
            console.log("task",task);
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }
    }

    const resetValForm = () => {
        setTask('');
        setCategory('');
        setNotes('');
        setDate(null);
        setTime(null);
     }

    const updateTask = async () => {
        try{
            if(date && time) {
                const taskRef = doc(db, "tasks", currentDocument);
                updateDoc(taskRef, {
                    task: task,
                    date: Timestamp.fromDate(new Date(date.toString())),
                    category: category,
                    time: Timestamp.fromDate(new Date(time.toString())),
                    notes: notes
                });  
                setSuccess(true);
                resetValForm();
            }  
        }
        catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    const handleTimeChange = (newValue: Timestamp | null) => {
        setTime(newValue);
    }

    const handleDateChange = (newValue: Timestamp | null) => {
        setDate(newValue);
    }
    useEffect(() => {
        fetchPostCategory();
        fetchPost();
    }, [id]);

    return (
    
        <div className="appBlock">
            <div className="appForm">
                <div className="form-group">
                    <label htmlFor="task">Add task</label>
                    <input className="input-forms" type="text" id="task" placeholder="Add task" value={task} onChange={(e) => setTask(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select className="input-forms" name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        {categoryData.map((item, index) => <option key={index} value={item.label}>{item.label}</option>)}
                    </select>
                </div>
                <div className="form-group form-date" >
                    <label htmlFor="date">Date</label>
                    <DatePicker className='input-form-custom' value={date} onChange={handleDateChange}/>
                </div>
                <div className="form-group form-date" >
                    <label htmlFor="time">Time</label>
                    <TimePicker className='input-form-custom' value={time} onChange={handleTimeChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea className="input-forms" name="notes" id="notes" cols={30} rows={10} value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                </div>
                <div className="form-group form-submit">
                    <button className="btn btn-primary" onClick={updateTask}><i className="icon-check"></i></button>
                </div>
            </div>
            {success && <Poppin title="Success" message="Task update successfully" linkBtn='/home' valBtn='Validate'/>} 
            <Menu {...dataMenuWithoutAdd}/>
        </div>
    )
}

import Menu from '../menu/Menu';
import {dataMenuWithoutAdd} from '../../data';
import './addTask.scss';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { query, collection, getDocs, orderBy, addDoc, Timestamp, limit, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';
import { CategoryType } from '../../models/CategoryType';
import { Poppin } from '../poppin/Poppin';
import { uid } from '../../dataLog';


export default function Addtask() {

    const [categoryData, setCategoryData] = useState<CategoryType[]>([]);
    const [idTask, setIdTask] = useState<number | null>(null);
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState<Timestamp | null>(null);
    const [time, setTime] = useState<Timestamp | null>(null);
    const [notes, setNotes] = useState('');
    const [success, setSuccess] = useState(false);
    
    // Function to handle date change
    const handleDateChange = (newValue: Timestamp | null) => {
        setDate(newValue);
    };

    // Function to handle time change
    const handleTimeChange = (newValue: Timestamp | null) => {
        setTime(newValue);
    };

    const resetValForm = () => {
        setTask('');
        setCategory('');
        setNotes('');
        setDate(null);
        setTime(null);
     }

     const fetchLastId = async () => {
        try {
            const q = query(collection(db, "tasks"), orderBy("id", "desc"), limit(1)); // Limit to 1 document
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const lastId = querySnapshot.docs[0].data().id;
                setIdTask(lastId + 1); // Set the new ID as the last ID + 1
            } else {
                setIdTask(1); // If no documents found, set ID to 1
            }
        } catch (error) {
            console.error("Error fetching last ID: ", error);
        }
    }

    const addTask = async () => {
        try{
            if(date && time) {
                await addDoc(collection(db, "tasks"), {
                    id: idTask,
                    task: task,
                    date: Timestamp.fromDate(new Date(date.toString())),
                    category: category,
                    time: Timestamp.fromDate(new Date(time.toString())),
                    notes: notes,
                    state: false,
                    uid: uid
                });
                setSuccess(true);
                resetValForm();
            }  
        }
        catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    const fetchPost = async () => {
        try {
            const q = query(collection(db, "category"), where("uid", "==", uid), orderBy("id", "asc"));
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

     

     useEffect(() => {
         fetchPost();
        fetchLastId();
     }, [ ]);
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
                    <button className="btn btn-primary" onClick={addTask}><i className="icon-check"></i></button>
                </div>
            </div>
            {success && <Poppin title="Success" message="Task added successfully" linkBtn='/home' valBtn='Validate'/>}
            <Menu {...dataMenuWithoutAdd}/>
        </div>
    )
}
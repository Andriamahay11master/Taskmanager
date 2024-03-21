
import Menu from '../menu/Menu';
import {dataMenuWithoutAdd} from '../../data';
import './addTask.scss';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { query, collection, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';
import { CategoryType } from '../../models/CategoryType';


export default function Addtask() {

    const [categoryData, setCategoryData] = useState<CategoryType[]>([]);
    const addTask = () => {
        console.log('addTask')
    }

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

     useEffect(() => {
         fetchPost();
     }, [ ]);
    return (
        
        <div className="appBlock">
            <div className="appForm">
                <div className="form-group">
                    <label htmlFor="task">Add task</label>
                    <input className="input-forms" type="text" id="task" placeholder="Add task"/>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select className="input-forms" name="category" id="category">
                        {categoryData.map((item, index) => <option key={index} value={item.label}>{item.label}</option>)}
                    </select>
                </div>
                <div className="form-group form-date" >
                    <label htmlFor="date">Date</label>
                    <DatePicker className='input-form-custom'/>
                </div>
                <div className="form-group form-date" >
                    <label htmlFor="time">Time</label>
                    <TimePicker className='input-form-custom'/>
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea className="input-forms" name="notes" id="notes" cols={30} rows={10}></textarea>
                </div>
                <div className="form-group form-submit">
                    <button className="btn btn-primary" onClick={addTask}><i className="icon-check"></i></button>
                </div>
            </div>
            <Menu {...dataMenuWithoutAdd}/>
        </div>
    )
}
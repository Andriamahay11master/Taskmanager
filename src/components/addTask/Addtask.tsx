
import Menu from '../menu/Menu';
import {dataMenuWithoutAdd, listCategory} from '../../data';
import './addTask.scss';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';

export default function Addtask() {
    const addTask = () => {
        console.log('addTask')
    }
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
                        {listCategory.map((item, index) => <option key={index} value={item.label}>{item.label}</option>)}
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
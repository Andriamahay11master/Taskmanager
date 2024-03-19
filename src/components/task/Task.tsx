
import Menu from '../menu/Menu';
import {dataMenuWithoutAdd, listTasks} from '../../data';
import './task.scss';
import Itemtask from '../ItemTask/Itemtask';
import { Link } from 'react-router-dom';

export default function Task() {
    return (
        
        <div className="appBlock">
            <div className="appItem">
                <h2 className="title-h2">All tasks</h2>
                <div className="listTask">
                    {listTasks.map((item, index) => <Itemtask key={index} task={item.task} time={item.time} />)}
                </div>
            </div>
            <div className="appAdd">
                <Link to="/addTask" className="btn btn-primary"><i className="icon-plus"></i></Link>
            </div>
            <Menu {...dataMenuWithoutAdd}/>
        </div>
    )
}
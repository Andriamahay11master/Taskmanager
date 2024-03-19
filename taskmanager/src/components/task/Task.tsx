
import Menu from '../menu/Menu';
import {dataMenu, listTasks} from '../../data';
import './task.scss';
import Itemtask from '../ItemTask/Itemtask';

export default function Task() {
    return (
        
        <div className="appBlock">
            <div className="appItem">
                <h2 className="title-h2">All tasks</h2>
                <div className="listTask">
                    {listTasks.map((item, index) => <Itemtask key={index} task={item.task} time={item.time} />)}
                </div>
            </div>
            <Menu {...dataMenu}/>
        </div>
    )
}
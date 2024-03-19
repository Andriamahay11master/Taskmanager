
import Menu from '../menu/Menu';
import {dataMenuWithoutAdd} from '../../data';
import './addTask.scss';

export default function Addtask() {
    return (
        
        <div className="appBlock">
            <Menu {...dataMenuWithoutAdd}/>
        </div>
    )
}
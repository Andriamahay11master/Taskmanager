
import Menu from '../menu/Menu';
import {dataMenu} from '../../data';
import './task.scss';

export default function Task() {
    return (
        
        <div className="appBlock">
            <Menu {...dataMenu}/>
        </div>
    )
}
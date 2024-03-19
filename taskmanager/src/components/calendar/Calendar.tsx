
import Menu from '../menu/Menu';
import {dataMenu} from '../../data';
import './calendar.scss';

export default function Calendar() {
    return (
        
        <div className="appBlock">
            <Menu {...dataMenu}/>
        </div>
    )
}

import Menu from '../menu/Menu';
import {dataMenu} from '../../data';
import './parameter.scss';

export default function Parameter() {
    return (
        
        <div className="home">
            <Menu {...dataMenu}/>
        </div>
    )
}
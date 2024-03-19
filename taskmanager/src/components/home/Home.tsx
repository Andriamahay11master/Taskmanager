import React from 'react';
import Menu from '../menu/Menu';
import {dataMenu} from '../../data';
import './home.scss';      
import { Link } from 'react-router-dom';

export default function Home() {
    
    const searchTask = () => {
        console.log('searchTask')
    }
    return (
        <div className="appBlock">
            <div className="appSearchBlock">
                <button className='btn btn-icon' onClick={searchTask}><i className='icon-search'></i></button>
                <input type="text" placeholder="Search for Tasks, Events"/>
            </div>
            <div className="appItem">
                <h2 className="title-h2">Categories</h2>
                <div className="listCategory">

                </div>
            </div>
            <div className="appItem">
                <div className="appTop"><h2 className="title-h2">Today's task</h2>
                <Link className="btn btn-link" to="/task">See all</Link>
                </div>
                <div className="listTask">

                </div>
            </div>
            <Menu {...dataMenu}/>
        </div>
    );
}
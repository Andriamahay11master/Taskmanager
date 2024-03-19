import React from 'react';
import Menu from '../menu/Menu';
import {dataMenu} from '../../data';

export default function Home() {
    
    return (
        <div className="home">
            <Menu {...dataMenu}/>
        </div>
    );
}
import React from 'react';
import Menu from '../menu/Menu';

export default function Home() {
    const listRouting = [
        '/home',
        '/calendar',
        '/tasks',
        '/parameter',
    ];

    const routeAdd = '/add';

    const dataMenu = {
        listRouting,
        routeAdd
    }
    return (
        <div className="home">
            <Menu {...dataMenu}/>
        </div>
    );
}
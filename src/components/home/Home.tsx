import React, { useEffect, useState } from 'react';
import Menu from '../menu/Menu';
import {dataMenu, listCategory, listTasks} from '../../data';
import './home.scss';      
import { Link } from 'react-router-dom';
import Category from '../category/Category';
import Itemtask from '../ItemTask/Itemtask';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
export default function Home() {
    const [userEmail, setUserEmail] = useState('');

    const searchTask = () => {
        console.log('searchTask')
    }

    const logout = () => {
        signOut(auth).then(() => {
            console.log('signOut')
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email|| '');
            } else {
                setUserEmail('');
            }
        });

        // Cleanup subscription
        return () => unsubscribe();
    }, []);

    return (
        <div className="appBlock">
            <div className="appSearchBlock">
                <button className='btn btn-icon' onClick={searchTask}><i className='icon-search'></i></button>
                <input type="text" placeholder="Search for Tasks, Events"/>
            </div>
            <div className="appItem">
                <p>{userEmail && `Logged in as: ${userEmail}`}</p>
            <button className='btn btn-primary' onClick={logout}>Logout</button>
                <h2 className="title-h2">Categories</h2>
                <div className="listCategory">
                    {listCategory.map((item, index) => <Category key={index} label={item.label} icon={item.icon} color={item.color} />)}
                </div>
            </div>
            <div className="appItem">
                <div className="appTop"><h2 className="title-h2">Today's task</h2>
                <Link className="btn btn-link" to="/task">See all</Link>
                </div>
                <div className="listTask">
                    {listTasks.map((item, index) => <Itemtask key={index} task={item.task} time={item.time} />)}
                </div>
            </div>
            <Menu {...dataMenu}/>
        </div>
    );
}
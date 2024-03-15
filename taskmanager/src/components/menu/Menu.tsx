import React from "react";
import './menu.scss';
import { Link } from 'react-router-dom';

interface MenuProps {
    listRouting: string[]
    routeAdd: string
}
export default function Menu({listRouting, routeAdd} : MenuProps) {
    return (
        <div className="menu">
            <ul className="list-menu">
                <li>
                    <Link className="link-menu" to={listRouting[0]}><i className="icon-home"></i></Link>
                </li>
                <li>
                    <Link className="link-menu" to={listRouting[1]}><i className="icon-calendar"></i></Link>
                </li>
                {routeAdd && (
                    <li>
                        <Link className="link-menu link-add" to={routeAdd}><i className="icon-plus"></i></Link>
                    </li>    
                )}
                <li>
                    <Link className="link-menu" to={listRouting[2]}><i className="icon-tasks"></i></Link>
                </li>
                <li>
                    <Link className="link-menu" to={listRouting[3]}><i className="icon-briefcase"></i></Link>
                </li>
            </ul>
        </div>
    );
}
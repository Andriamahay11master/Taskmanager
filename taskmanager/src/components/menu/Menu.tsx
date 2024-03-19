import React from "react";
import './menu.scss';
import { Link, useLocation } from 'react-router-dom';
import { MenuType } from "../../models/MenuType";

interface MenuProps {
    listRouting: MenuType[],
    routeAdd?: boolean// Make routeAdd optional
    indicePosition?: number
}

export default function Menu({ listRouting, routeAdd,indicePosition }: MenuProps) {
    const location = useLocation();

    return (
        <div className="menu">
            <ul className={routeAdd ? "list-menu list-menu-add" : "list-menu"}>
                {listRouting.map((item, index) => (
                    <li key={index}>
                        {routeAdd && index === indicePosition ? ( 
                            <Link className={location.pathname === item.route ? "link-menu link-add active" : "link-menu link-add"} to={item.route}>
                                <i className={item.icon}></i>
                            </Link>

                        ) : (
                            <Link className={location.pathname === item.route ? "link-menu active" : "link-menu"} to={item.route}>
                                <i className={item.icon}></i>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

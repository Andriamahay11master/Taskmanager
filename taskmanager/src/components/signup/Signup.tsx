import React from "react";
import { Link } from 'react-router-dom';

interface SignupProps {
    title: string
    subtitle?: string
    username: string
    email: string
    password: string
    labelButton: string
    routeSignin: string
    textUser: string
    labelSignin: string
    saveAccount: () => void
}
export default function Signup({title, subtitle, username, email, password, labelButton, routeSignin, textUser, labelSignin, saveAccount} : SignupProps) {
    return (
        <div className="form-block">
            <h1 className="title-h1">{title}</h1>
            <div className="form-content">
                <h2 className="title-h2">{subtitle}</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username"><i className="icon-user"></i>{username}</label>
                        <input type="text" id="username" placeholder="Write your username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"><i className="icon-mail"></i>{email}</label>
                        <input type="email" id="email" placeholder="Write your email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><i className="icon-lock"></i>{password}</label>
                        <input type="password" id="password" placeholder="Write your password"/>
                    </div>
                    <div className="form-group form-submit">
                        <button className="btn btn-primary" onClick={() => saveAccount()}>{labelButton}</button>
                    </div>
                </form>
                <p>{textUser} <Link className="btn btn-link" to={routeSignin}>{labelSignin}</Link></p>
            </div>
        </div>
    );
}
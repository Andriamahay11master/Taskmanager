import React from "react";
import { Link } from 'react-router-dom';

interface SigninProps {
    title: string
    subtitle?: string
    email: string
    password: string
    labelButton: string
    routeSignup: string
    textUser: string
    labelSignup: string
    textForgot: string
    routeForgot: string
    connectAccount: () => void
}
export default function Signin({title, subtitle, email, password, labelButton, routeSignup, textUser, labelSignup, textForgot, routeForgot, connectAccount} : SigninProps) {
    return (
        <div className="form-block">
            <h1 className="title-h1">{title}</h1>
            <div className="form-content">
                <h2 className="title-h2">{subtitle}</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email"><i className="icon-mail"></i>{email}</label>
                        <input type="email" id="email" placeholder="Write your email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><i className="icon-lock"></i>{password}</label>
                        <input type="password" id="password" placeholder="Write your password"/>
                    </div>
                    <div className="form-group form-forgot">
                        <Link className="btn btn-link" to={routeForgot}>{textForgot}</Link>
                    </div>
                    <div className="form-group form-submit">
                        <button className="btn btn-primary" onClick={() => connectAccount()}>{labelButton}</button>
                    </div>
                </form>
                <p>{textUser} <Link className="btn btn-link" to={routeSignup}>{labelSignup}</Link></p>
            </div>
        </div>
    );
}
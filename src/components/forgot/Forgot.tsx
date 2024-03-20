import React from "react";
import { Link } from 'react-router-dom';
import { Poppin } from "../poppin/Poppin";

interface ForgotProps {
    title: string
    subtitle?: string
    email: string
    labelButton: string
    routeSignup: string
    textUser: string
    labelSignup: string
}
export default function Forgot({title, subtitle, email, labelButton, routeSignup, textUser, labelSignup} : ForgotProps) {

    const [success, setSuccess] = React.useState(false);

    
    const resetPassword = (e : any) => {
        e.preventDefault();
        console.log('resetPassword');setSuccess(true);
    }


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
                    <div className="form-group form-submit">
                        <button className="btn btn-primary" onClick={resetPassword}>{labelButton}</button>
                    </div>
                </form>
                <p>{textUser} <Link className="btn btn-link" to={routeSignup}>{labelSignup}</Link></p>
            </div>

            {success && <Poppin title="Email sent" message="Check your email for the reset password link" linkBtn="/signin" valBtn="Back to sign in"/>}
        </div>
    );
}
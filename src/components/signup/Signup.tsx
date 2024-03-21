import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Poppin } from "../poppin/Poppin";

interface SignupProps {
    user: any
    title: string
    subtitle?: string
    username?: string
    emailu: string
    passwordu: string
    labelButton: string
    routeSignin: string
    textUser: string
    labelSignin: string
}
export default function Signup({user, title, subtitle, username, emailu, passwordu, labelButton, routeSignin, textUser, labelSignin} : SignupProps) {

    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const [codeError, setCodeError] = React.useState('');
    const [errorExist, setErrorExist] = React.useState(false);
    const [errorForm, setErrorForm] = React.useState('');
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSignUp = (e : any) => {
        e.preventDefault();
        if(!email && !password) return;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setSuccess(true);
            localStorage.setItem('isLoggedIn', 'false');
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            setErrorExist(true)
            setCodeError(errorCode)
            manageMessageError();
        });
    }

    const manageMessageError = () => {
        switch(codeError) {
            case 'auth/email-already-in-use':
                setErrorForm('Email already in use');
                break;
            case 'auth/invalid-email':
                setErrorForm('Invalid email');
                break;
            case 'auth/weak-password':
                setErrorForm('Weak password');
                break;
            case 'auth/missing-email':
                setErrorForm('Missing email');
                break;
            default:
                setErrorForm('Please try again');
                break;
        }
    }

    const onChangeEmail = (e : any) => {
        setEmail(e.target.value);
        if(errorExist) setErrorExist(false);
    }

    const onChangePassword = (e : any) => {
        setPassword(e.target.value);
        if(errorExist) setErrorExist(false);
    }

    if(user && localStorage.getItem('isLoggedIn') === 'true') {
        console.log("********signi in",localStorage.getItem('isLoggedIn'));
        return <Navigate to="/home" />
    }

    return (
        <div className="form-block">
            <h1 className="title-h1">{title}</h1>
            <div className="form-content">
                <h2 className="title-h2">{subtitle}</h2>
                <form>
                    {username && 
                        <div className="form-group">
                        <label htmlFor="username"><i className="icon-user"></i>{username}</label>
                        <input type="text" id="username" placeholder="Write your username"/>
                    </div>
                    }
                    <div className="form-group">
                        <label htmlFor="email"><i className="icon-mail"></i>{emailu}</label>
                        <input type="email" id="email" placeholder="Write your email" onChange={(e) => onChangeEmail(e)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><i className="icon-lock"></i>{passwordu}</label>
                        <div className="form-group-password">
                            <input type={showPassword ? "text" : "password"} id="password" placeholder="Write your password" onChange={(e) => onChangePassword(e)}/>
                            <i className={showPassword ? "icon-eye-off" : "icon-eye"} onClick={() => toggleShowPassword()}></i>
                        </div>
                        {(errorExist && errorForm) && <p className="error-form">{errorForm}</p>}
                    </div>
                    <div className="form-group form-submit">
                        <button className="btn btn-primary" onClick={handleSignUp}>{labelButton}</button>
                    </div>
                </form>
                <p>{textUser} <Link className="btn btn-link" to={routeSignin}>{labelSignin}</Link></p>
            </div>
            {success && <Poppin title="Account created" message="You can now log in" linkBtn="/signin" valBtn="Back to sign in"/>}
        </div>
    );
}
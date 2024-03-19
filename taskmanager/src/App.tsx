import React from 'react';
import './App.scss';
import Onboarding from './components/onboarding/Onboarding';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Home from './components/home/Home';
import Calendar from './components/calendar/Calendar';
import Parameter from './components/parameter/Parameter';
import Task from './components/task/Task';
import Addtask from './components/addTask/Addtask';
function App() {
  const dataOnboarding = {
    image: 'images/onboarding.svg',
    imageAlt: 'Logo Free Fonts',
    imageTitle: 'Logo Free Fonts',
    title: 'Simplify, Organize, and Conquer <span>Your Day</span>',
    description: 'Take control of your tasks and achieve your goals..',
    labelButton: 'Get Started',
    routeButton: '/signup'
  }

  const saveAccount = () => {
    console.log('saveAccount');
  }

  const dataSIgnup = {
    title: 'Create an account',
    subtitle: 'Sign up',
    username: 'Your Username',
    email: 'Your Email',
    password: 'Password',
    labelButton: 'Sign up',
    routeSignin: '/signin',
    textUser: 'Already a user?',
    labelSignin: 'Sign in',
    saveAccount: saveAccount
  }

  const dataSignin = {
    title: 'Welcome Back',
    subtitle: 'Login',
    email: 'Your Email',
    password: 'Password',
    labelButton: 'Login',
    routeSignup: '/signup',
    textUser: "Don't have an account?",
    labelSignup: 'Sign up', 
    textForgot: 'Forgot your password?',
    routeForgot: '/forgot',
    routeClick: '/home'
  }
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/onboarding" element={<Onboarding {...dataOnboarding}/>}/>
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="/parameter" element={<Parameter />}/>
        <Route path="/addTask" element={<Addtask />}/>
        <Route path="/task" element={<Task />}/>
        <Route path="/signup" element={<Signup {...dataSIgnup}/>}/>
        <Route path="/signin" element={<Signin {...dataSignin}/>}/>
        <Route path="/" element={<Onboarding {...dataOnboarding}/>}/>
      </Routes>
    </Router>
  );
}

export default App;

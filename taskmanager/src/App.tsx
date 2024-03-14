import React from 'react';
import './App.scss';
import Onboarding from './components/onboarding/Onboarding';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/signup/Signup';

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
  return (
    <Router>
      <Routes>
        <Route path="/onboarding" element={<Onboarding {...dataOnboarding}/>}/>
        <Route path="/signup" element={<Signup {...dataSIgnup}/>}/>
        <Route path="/" element={<Onboarding {...dataOnboarding}/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Onboarding from './components/onboarding/Onboarding';
import Signup from './components/signup/Signup';

function App() {
  const dataOnboarding = {
    image: 'images/onboarding.svg',
    imageAlt: 'Logo Free Fonts',
    imageTitle: 'Logo Free Fonts',
    title: 'Simplify, Organize, and Conquer <span>Your Day</span>',
    description: 'Take control of your tasks and achieve your goals..',
    labelButton: 'Get Started',
    routeButton: '/onboarding'
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
    routeSignin: '/',
    textUser: 'Already a user?',
    labelSignin: 'Sign in',
    saveAccount: saveAccount
  }
  return (
    <div className="appBlock">
      {/* <Onboarding {...dataOnboarding}/> */}
      <Signup {...dataSIgnup}/> 
    </div>
  );
}

export default App;

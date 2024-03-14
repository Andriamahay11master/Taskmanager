import React from 'react';
import './App.scss';
import Onboarding from './components/onboarding/Onboarding';

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
  return (
    <div className="appBlock">
      <Onboarding {...dataOnboarding}/>
    </div>
  );
}

export default App;

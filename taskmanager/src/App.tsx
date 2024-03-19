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
import { dataOnboarding, dataSIgnup, dataSignin } from './dataLog';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
function App() {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
    </LocalizationProvider>
  );
}

export default App;

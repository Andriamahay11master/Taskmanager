import React, { useEffect, useState } from 'react';
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
import { dataOnboarding, dataSIgnup, dataSignin, dataForgot } from './dataLog';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Forgot from './components/forgot/Forgot';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ProtectedRoute } from './components/protectedRoute';
import Loader from './components/loader/Loader';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
              setIsFetching(false);
              return; 
          }
          setUser(null);
          setIsFetching(false);
      })
      return () => unsubscribe();
  })
  if (isFetching) {
    return <Loader />;
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Router>
      <Routes>
        <Route path="/home" element={
          <ProtectedRoute user={user}>
              <Home/>
          </ProtectedRoute>  
          } />
        <Route path="/onboarding" element={<Onboarding {...dataOnboarding}/>}/>
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="/parameter" element={<Parameter />}/>
        <Route path="/addTask" element={<Addtask />}/>
        <Route path="/task" element={<Task />}/>
        <Route path="/signup" element={<Signup user={user} {...dataSIgnup}/>}/>
          <Route path="/signin" element={<Signin user={user} {...dataSignin}/>}/>
        <Route path="/forgot" element={<Forgot {...dataForgot}/>}/>
        <Route path="/" element={<Onboarding {...dataOnboarding}/>}/>
      </Routes>
    </Router>
    </LocalizationProvider>
  );
}

export default App;

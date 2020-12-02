import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Employee from './employee';
import Employees from './employees'

function App() {

  return (
   <>
   <Route exact path="/employee/:id" component={Employee}></Route>
   <Route exact path="/" component={Employees}></Route>
  
    </> 
  )
}

export default App;

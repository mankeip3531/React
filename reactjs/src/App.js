import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './home.js';
// import Task from './task.js';


function App() {
  return (
    <div className = "app">
        <Route exact path="/" component={Home}/>
        {/* <Route path="/task" component={Task}/> */}
    </div>
  );
}

export default App;

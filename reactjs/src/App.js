import React from 'react';
import './App.css';
import {Gallery} from './gallery.js';
import ReactPlayer from 'react-player';
import Card from './mission.js';
import {Route, Link} from 'react-router-dom';
import Home from './home.js';
import Task from './task.js';

function App() {
  return (
    <div className = "app">
      
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/task" component={Task}/> */}
    </div>
  );
}

export default App;

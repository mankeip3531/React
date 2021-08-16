import React from 'react';
import './App.css';

function App() {
  return (
    <div className = "app">
      
      <Route exact path="/" component={Home}/>
      <Route exact path="/task" component={Task}/>
    </div>
  );
}

export default App;

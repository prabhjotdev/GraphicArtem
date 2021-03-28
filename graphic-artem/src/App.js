import React, { Component } from 'react';
import './App.css';
import Login from './Screens/Login/Login';
import Routes from './Routes';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Routes/>
      </div>
    );
  }
}

export default App;

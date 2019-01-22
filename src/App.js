import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import SearchContainer from './components/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="title">TVMaze React</h1>
      
      <Home/>
      </div>
    );
  }
}

export default App;
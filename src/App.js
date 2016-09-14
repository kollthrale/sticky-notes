import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StickyNotes from './components/StickyNotes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.name} StickyNotes </h2>
          <StickyNotes />
        </div>
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main.js';
import data from './data/countries.json'

class App extends Component {
  render() {
    return (
      <Main dataProp={data} />
    );
  }
}

export default App;

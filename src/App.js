import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/countries.json'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/main.js';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Main dataProp={data} />
      </MuiThemeProvider>
    );
  }
}

export default App;

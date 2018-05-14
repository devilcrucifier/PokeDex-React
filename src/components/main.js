import React, { Component } from 'react';
import Header from './header.js'
import Body from './body.js'
import Page from './Page.js'

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br /><br />
        <Page countries={this.props.dataProp}/>
      </div>
    );
  }
}

export default Main;

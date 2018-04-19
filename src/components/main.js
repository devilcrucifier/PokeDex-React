import React, { Component } from 'react';
import Header from './header.js'
import Body from './body.js'

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br /><br />
        <Body countries={this.props.dataProp}/>
      </div>
    );
  }
}

export default Main;

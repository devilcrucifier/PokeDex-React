import React, { Component } from 'react';
import Header from './header.js'
import Body from './body.js'
import Page from './Page.js'

class Main extends Component {
  render() {
    return (
      <div >
        {/*<Header />*/}
        <br /><br />
        <Page countries={this.props.dataProp}/>
      </div>
    );
  }
}

export default Main;

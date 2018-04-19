import React, { Component } from 'react';
import {AppBar, Tabs, Tab} from 'material-ui'

class Header extends Component {
  render() {
    return (
      <div>
        {/* <header className="App-header">
          <h1 className="App-title">Real-Time Search</h1>
        </header>*/}
        <AppBar title="My App">
        <Tabs>
          <Tab label="Discover" />
          <Tab label="Live" />
          <Tab label="Jobs" />
          <Tab label="Sign Up with Email" />
        </Tabs>
      </AppBar>
      </div>
    );
  }
}

export default Header;

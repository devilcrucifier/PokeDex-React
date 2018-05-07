import React, { Component } from 'react';
import {AppBar, Tabs, Tab} from 'material-ui'
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import HamburgerMenu from 'react-hamburger-menu';

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const iconStyles = {
  marginRight: 24,
};

const Home = () => (
  <div>
    <HomeIcon
      style={iconStyles}
    />
  </div>
);

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }
  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <AppBar title="My App">
          <Tabs>
            {/* <Tab icon={<IconButton onClick={this.handleToggle}><Home /></IconButton>}></Tab> */}
            <Tab icon={<HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleToggle}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color='white'
              borderRadius={0}
              animationDuration={0.5}
            />}>
            </Tab>
            <Tab
              label="Trivia"
              // onActive={() => <Trivia />}
            />
            <Tab label="Live" />
            <Tab label="Jobs" />
            <Tab label="Sign Up with Email" />
          </Tabs>
        </AppBar>
        <Drawer
          open={this.state.open}
          docked={false}
          className="app-drawer"
          width={200}
          onRequestChange={(open) => this.setState({open})}
          ModalProps={{ onBackdropClick: this.handleToggle }}
        >
          <Button onClick={this.handleClose}>Menu Item</Button>
          <Button onClick={this.handleClose}>Menu Item 2</Button>
        </Drawer>
      </div>
    );
  }
}

export default Header;

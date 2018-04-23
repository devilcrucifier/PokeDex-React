import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import axios from "axios";

const style = {
  height: 4500,
  width: 700,
  margin: 20,
  textAlign: 'left',
  paddingLeft: 90,
  paddingRight: 90,
  display: 'inline-block',
};

class Trivia extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: '',
      open: false,
      contacts: [],
    }
    this.handleText = this.handleText.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
componentDidMount(){
  axios
   .get('http://numbersapi.com/number/type')
   .then(response => {
     console.log(response);
     // create an array of contacts only with relevant data
     const newContacts = response.data.map(c => {
       return {
         id: c.id,
         name: c.name
       };
     });

     // create a new "State" object without mutating
     // the original State object.
     const newState = Object.assign({}, this.state, {
       contacts: newContacts
     });

     // store the new state object in the component's state
     this.setState(newState);
   })
   .catch(error => console.log(error));
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

  handleText(event){
    this.setState({
      searchValue: event.target.value,
    });
  }
  handleClick(searchValue){
    console.log(searchValue);
  }
  render() {
    let data = this.props.contacts;
    let searchString = this.state.searchValue.trim().toLowerCase();
    if (searchString.length > 0) {
      return data;
    }
    return (
      <div>
        <br /><br />
        <TextField
          type="text"
          value={this.state.searchValue}
          onChange={this.handleText}
          placeholder="Type number here..."
        />
        <br /><br />
        <Paper style={style} zDepth={5} rounded={false}>
          <div>
            <br /><br /><br />
            {data}
          </div>
        </Paper>
        <br />
        <Button
          onClick={this.handleToggle}
        >Drawer
        </Button>
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

export default Trivia;

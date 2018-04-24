import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const style = {
  height: 4500,
  width: 700,
  margin: 20,
  textAlign: 'left',
  paddingLeft: 90,
  paddingRight: 90,
  display: 'inline-block',
};

class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: '',
      open: false,
      trivia: [],
    }
    this.handleText = this.handleText.bind(this);
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

  handleText(event){
    this.setState({
      searchValue: event.target.value,
    });
  }
  handleClick(searchValue){
    console.log(searchValue);
  }
  render() {
    let data = this.props.countries;
    let searchString = this.state.searchValue.trim().toLowerCase();
    if (searchString.length > 0) {
      data = data.filter((country) => {
        return country.name.toLowerCase().match(searchString);
      });
    }
    return (
      <div>
        <br /><br />
        <TextField
          type="text"
          value={this.state.searchValue}
          onChange={this.handleText}
          placeholder="Type here..."
        />
        {/*<Button
          variant="raised"
          color="primary"
          backgroundColor="red"
          onClick={() => this.handleClick(this.state.searchValue)}
        >Search
        ->https://data.gov.au/dataset/environment-bird-atlas // Link for dataset of birds
        ->http://chirag.freeshell.org/birds/identify/index.html
        ->http://www.whatbird.com/browse/attributes.aspx
        ->http://www.whatbird.com/browse/attributes.aspx
        ->http://www.birdsinbackyards.net/finder
        ->http://www.birds.iitk.ac.in/sites/default/files/IndiaChecklistl.pdf

        http://www.convertcsv.com/csv-to-json.htm

        </Button>*/}

        <br /><br />
        <Paper style={style} zDepth={5} rounded={false}>
          <div>
            <br /><br /><br />
            {data.map(countries => <div><li>{countries.name}</li></div>)}
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

export default Body;

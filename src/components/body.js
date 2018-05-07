import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
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
      trivia: [],
      scroll: false,
    }
    this.handleText = this.handleText.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };
  
  handleScroll(event) {
    this.setState({
      scroll: true,
    });
  };

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
    console.log(data);
    let searchString = this.state.searchValue.trim().toLowerCase();
    if (searchString.length > 0) {
      // data = Object.keys(data).filter((key) => {
      //   console.log(data[key].name);
      //   return data[key].name.toLowerCase().match(searchString);
      // });
      // console.log(data);
      // data = data.filter((country) => {
      //   return country.name.toLowerCase().match(searchString);
      // });
      console.log(data);
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
        <br /><br />
        <Paper style={style} zDepth={5} rounded={false}>
          <div>
            <br /><br /><br />
            {Object.keys(data).map((key, value) =>
              <li>{data[key].name}</li>
            )}
          </div>
        </Paper>
        <br />
      </div>
    );
  }
}

export default Body;

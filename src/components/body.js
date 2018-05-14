import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import _ from 'lodash';

const style = {
  height: 2350,
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

  render() {
    let data = this.props.countries;
    let newList = [];
    let searchString = this.state.searchValue.trim().toLowerCase();
    if (searchString.length > 0) {
      // console.log(data);
      // data = data.filter((country) => {
      //   return country.name.toLowerCase().match(searchString);
      // });
      data = Object.keys(data).forEach((key) => {
        if(!_.isEmpty(data[key].name.toLowerCase().match(searchString))) {
          newList.push(_.upperFirst(data[key].name.toLowerCase().match(searchString).input));
        }  
      });
      data = newList;
      data = Object.keys(data).map((key, value) =>
        <li>{data[key]}</li>
      )
    } else {
        data = Object.keys(data).map((key, value) =>
        <li>{data[key].name}</li>
      )
    };
    return (
      <div>
        <br /><br />
        <TextField
          type="text"
          value={this.state.searchValue}
          onChange={this.handleText}
          placeholder="Search..."
        />
        <br /><br />
        <Paper style={style} zDepth={5} rounded={false}>
          <div>
            <br /><br /><br />
            {data}
          </div>
        </Paper>
        <br />
      </div>
    );
  }
}

export default Body;

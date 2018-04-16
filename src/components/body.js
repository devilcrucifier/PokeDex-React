import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';

class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event){
    console.log(this.state.searchValue);
    this.setState({
      searchValue: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <br /><br />
        <input
          type="text"
          value={this.state.searchValue}
          onChange={this.handleSearch}
        />
        <br /><br />
        <div className="country-list">{this.props.countries.map(countries => <div><li>{countries.name}</li></div>)}</div>
      </div>
    );
  }
}

export default Body;

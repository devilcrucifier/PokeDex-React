import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: '',
    }
    this.handleText = this.handleText.bind(this);
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
        </Button>*/}

        <br /><br />
        <div className="country-list">{data.map(countries => <div><li>{countries.name}</li></div>)}</div>
      </div>
    );
  }
}

export default Body;

'use strict';

import React from 'react';
import axios from 'axios';

export default class HomeComponent extends React.Component {
  
  constructor(props)
  {
    super(props);
    
    this.state = {query: ''};
    
    this.propTypes = {
        clickEvent: React.PropTypes.func
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.findResults = this.findResults.bind(this);
  }
  
  handleChange(event) {
    this.setState({query: event.target.value});
  }
  
  findResults(e)
  {
    axios.get('/search', {
      params: {
        query: '#12345'
      }
    })
    .then(function (response) {
      alert(response);
    })
    .catch(function (error) {
      alert(error);
    });    
  }
    
  render() {
    return (
      <div className="home">
        <div className="home-content">
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button onClick={this.findResults}>Search</button>
        </div>
      </div>
    );
  }
}
'use strict';

import React from 'react';
import axios from 'axios';

class HomeComponent extends React.Component {
  
  constructor(props)
  {
    super(props);
    
    this.state = {query: ''};
        
    this.handleChange = this.handleChange.bind(this);
    this.findResults = this.findResults.bind(this);
  }
  
  handleChange(event) {
    
    let value = event.target.value;        
    this.setState({query: value});
    
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
          <input type="text" value="#" className="search-input" value={this.state.value} onChange={this.handleChange} />
          <div className="button" onClick={this.findResults}>
            <p>Search</p>
          </div>
        </div>
      </div>
    );
  }
}

HomeComponent.propTypes = {
    clickEvent: React.PropTypes.func
};

export default HomeComponent;
'use strict';

import React, {Component, PropTypes} from 'react';

class HeaderComponent extends Component {
  
  constructor(props)
  {
    super(props);   
    
    this.styles = {
      backgroundColor : (this.props.backgroundColor ? this.props.backgroundColor : '#333')
    }   
  }
  
  render() {
    return (      
      <header id="header" className="clearfix" style={this.styles}>
          <div className="divHeader">
              <ul className="header-inner">
                  <li className="logo">
                      <img src={this.props.logo} alt="header-logo" height="50px"/>
                  </li>            
              </ul>
          </div>
      </header>   
    );
  }

}

HeaderComponent.propTypes = {
  backgroundColor : PropTypes.string,
  logo: PropTypes.string
}

export default HeaderComponent;
'use strict';

import React, {Component, PropTypes} from 'react';
import Trianglify from 'trianglify';

class BackGroundComponent extends Component {
  
  constructor(props)
  {
    super(props);   
  }
  
  render() {
    this.generateAndApply();
    return null;
  }
  
  generateAndApply()
  {    
    var options = {
      height: window.innerWidth+200,
      width: window.innerWidth,
      cell_size: 80
    }
    var pattern = Trianglify(options);    
    document.body.setAttribute('style', 'background: '+ "url(" + pattern.canvas().toDataURL("image/png")+ ") no-repeat center center fixed; background-size: cover; -webkit-background-size: cover;" );
  }
}

export default BackGroundComponent;
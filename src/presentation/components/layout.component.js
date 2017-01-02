'use strict';

import React from 'react';
import { Link } from 'react-router';


export default class LayoutComponent extends React.Component {
  
  constructor(props)
  {
    super(props);      
  }
  render() {
    return (
      <div className="app-container">
        <header id="header" className="clearfix" data-current-skin="white">
            <div className="divHeader">
                <ul className="header-inner">
                    <li className="logo hidden-xs">
                        <img src="http://niche-macworld-production.s3.amazonaws.com/wp-content/uploads/2010/08/Tweet-button.jpg" alt="logo-tweet-sense" height="30px;"/> 
                        <span>Tweet-Sense</span>
                    </li>            
                    <li className="logo pull-right">
                      <Link to="/">
                        Tweet-sense
                      </Link>
                    </li>
                </ul>
            </div>
        </header> 
        <section id="main" data-layout="layout-1">
            <section id="content">
                <div className="container">
                    <div className="app-content">{this.props.children}</div>
                </div>
            </section>
        </section>               
        <footer>          
            This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.          
        </footer>
      </div>
    );
  }
}
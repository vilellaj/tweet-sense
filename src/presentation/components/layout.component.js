'use strict';

import React from 'react';
import { Link } from 'react-router';
import HeaderComponent from './header.component';
import BackGroundComponent from './background.component';

export default class LayoutComponent extends React.Component {
  
  constructor(props)
  {
    super(props);      
  }
  
  render() {
    return (
      <div className="app-container">
        <BackGroundComponent/>
        <HeaderComponent backgroundColor="#73a2ef" logo="https://g.twimg.com/dev/documentation/image/DTC_Services_1h_hero_bg.png"/>
        <section id="main">
            <div id="gradient" />
            <section id="content">
                <div className="container">
                    <div className="app-content">{this.props.children}</div>
                </div>
            </section>
        </section>               
      </div>
    );
  }
}
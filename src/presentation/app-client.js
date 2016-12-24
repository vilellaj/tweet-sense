import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/app-routes.component';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
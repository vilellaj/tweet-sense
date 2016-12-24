import React from 'react'
import { Route, IndexRoute } from 'react-router'
import LayoutComponent from './components/layout.component';
import HomeComponent from './components/home.component';
import TestComponent from './components/test.component';
import NotFoundComponent from './components/not-found.component';

const routes = (
  <Route path="/" component={LayoutComponent}>
    <IndexRoute component={HomeComponent}/>
    <Route path="test" component={TestComponent}/>
    <Route path="*" component={NotFoundComponent}/>
  </Route>
);

export default routes;
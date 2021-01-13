import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import About from '../pages/About';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/signin" exact component={SignIn} />
    <Route path="/about" exact component={About} />
  </Switch>
);
export default Routes;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Login
} from '../pageListAsync';

class Outer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    );
  }
}

export default Outer;
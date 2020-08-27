import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Login, ChangePassword, ForgetPassword
} from '../pageListAsync';

class Outer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/foget-password" component={ForgetPassword} />
        <Route exact path="/change-password" component={ChangePassword} />
      </Switch>
    );
  }
}

export default Outer;
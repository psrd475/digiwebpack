import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from 'Components';
import {
  AgencyRegistration
} from '../pageListAsync';

class Agency extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/agency/registration" component={AgencyRegistration} />
        </Switch>
      </Fragment>
    );
  }
}

export default Agency;
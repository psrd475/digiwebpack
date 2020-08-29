import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from 'Components';
import {
  ManageAgencyRegistrations, RegistrationRequestList
} from '../pageListAsync';

class Outer extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          {/* <Route exact path="/admin/agency-registrations" component={ManageAgencyRegistrations} /> */}
          <Route exact path="/admin/request-list" component={RegistrationRequestList} />
        </Switch>
      </Fragment>
    );
  }
}

export default Outer;
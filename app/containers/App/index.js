import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotifMessage } from 'Components';
import { Landing, AgencyRegister } from '../pageListAsync';
import { LandingHeader, Footer, Register, Login, ManageTravelAgencies } from 'Components';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
        <LandingHeader />
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/agency-register" component={AgencyRegister} />
          <Route exact path="/admin/manage-travel-agencies" component={ManageTravelAgencies} />
        </Switch>
        <Footer />
        <NotifMessage />
      </Fragment>
    );
  }
}

export default App;

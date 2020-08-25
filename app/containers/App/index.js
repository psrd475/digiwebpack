import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotifMessage } from 'Components';
import { Landing, AgencyRegister } from '../pageListAsync';
import { LandingHeader, Footer, Register, AgencyRegister1, AgencyRegister2, AgencyRegister3, AgencyRegister4 } from 'Components';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <LandingHeader />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/agency-register" component={AgencyRegister} />
        </Switch>
        <Footer />
        <NotifMessage />
      </Fragment>
    );
  }
}

export default App;

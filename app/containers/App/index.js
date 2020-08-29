import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotifMessage, Footer } from 'Components';
import Outer from './Outer';
// import User from './User';
import Agency from './Agency';
import Admin from './Admin';
import { Landing } from '../pageListAsync';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            path="/agency"
            render={() => <Agency />}
          />
          {/* <Route
            path="/user"
            render={() => <User />}
          />*/}
          <Route
            path="/admin"
            render={() => <Admin />}
          />
          <Route component={Outer} />
        </Switch>
        <Footer />
        <NotifMessage />
      </Fragment>
    );
  }
}

export default App;

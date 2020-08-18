import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotifMessage } from 'Components';
import { Landing } from '../pageListAsync';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
        <NotifMessage />
      </Fragment>
    );
  }
}

export default App;

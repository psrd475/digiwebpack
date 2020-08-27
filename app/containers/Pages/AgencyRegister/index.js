import React, { Component, Fragment } from 'react';
import { AgencyRegister1, AgencyRegister2, AgencyRegister3, AgencyRegister4 } from 'Components';

class AgencyRegister extends Component {
  constructor() {
    super();
    this.state = {
      tab: 0
    }
  }

  handleChangeTab = (event, value) => {
    this.setState({ tab: value });
  };

  goNext = () => {
    this.setState({ tab: this.state.tab + 1 });
  }

  goPrevious = () => {
    this.setState({ tab: this.state.tab - 1 });
  }
  render() {
    const { tab } = this.state;
    return (
      <Fragment>
        {tab === 0 && (
          <AgencyRegister1 goNext={this.goNext} />
        )}
        {tab === 1 && (
          <AgencyRegister2 goNext={this.goNext} goPrevious={this.goPrevious} />
        )}
        {tab === 2 && (
          <AgencyRegister3 goNext={this.goNext} goPrevious={this.goPrevious} />
        )}
        {tab === 3 && (
          <AgencyRegister4 goNext={this.goNext} goPrevious={this.goPrevious} />
        )}
        {tab === 4 && (
          <AgencyRegister4 goPrevious={this.goPrevious} />
        )}
      </Fragment>
    )
  }
}

export default AgencyRegister;
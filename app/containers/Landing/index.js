import React, { Fragment } from 'react';
import {
  UmrahSearch, Features, ProgramPackages, Newsletter, Header
} from 'Components';

class Landing extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="wrapper">
          <UmrahSearch />
          <Features />
          <ProgramPackages title=" برامج اقتصادية" />
          <ProgramPackages title=" قريب من الحرمين" />
          <ProgramPackages title=" رفاهية اعلى " />
          <Newsletter />
        </div>
      </Fragment>
    );
  }
}

export default Landing;

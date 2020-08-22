import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LandingHeader, UmrahSearch, Features, ProgramBlock, Newsletter, Footer } from 'Components';
import { setNotif } from 'Actions/NotifActions';

class Landing extends React.Component {
  componentDidMount() {
    this.props.setNotif({
      message: 'Enjoy react with webpack created by @svikrant406',
      variant: 'success'
    });
  }

  render() {
    return (
      <div className="wrapper">

        <UmrahSearch />
        <Features />
        <section className="program-block mb-3 mb-lg-5">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-offset={100}
            data-aos-duration={1500}
            data-aos-delay={100}
          >
            <h2 className="section-title"> برامج اقتصادية </h2>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <ProgramBlock />
              </div>
              <div className="col-lg-6 mb-4">
                <ProgramBlock />
              </div>
            </div>
          </div>
        </section>
        <section className="program-block mb-3 mb-lg-5">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-offset={100}
            data-aos-duration={1500}
            data-aos-delay={100}
          >
            <h2 className="section-title"> قريب من الحرمين </h2>
            <div className="row">
              <div className="col-lg-6 mb-4"><ProgramBlock /></div>
              <div className="col-lg-6 mb-4"><ProgramBlock /></div>
            </div>
          </div>
        </section>
        <section className="program-block mb-3 mb-lg-5">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-offset={100}
            data-aos-duration={1500}
            data-aos-delay={100}
          >
            <h2 className="section-title"> رفاهية اعلى </h2>
            <div className="row">
              <div className="col-lg-6 mb-4"><ProgramBlock /></div>
              <div className="col-lg-6 mb-4"><ProgramBlock /></div>
            </div>
          </div>
        </section>
        <Newsletter />

      </div>
    );
  }
}

Landing.propTypes = {
  setNotif: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setNotif: bindActionCreators(setNotif, dispatch)
});

const LandingMapped = connect(
  null,
  mapDispatchToProps
)(Landing);

export default LandingMapped;

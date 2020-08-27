import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AgencyRegistrationForm } from 'Components';

class AgencyRegistration extends Component {
  render() {
    return (
      <AgencyRegistrationForm />
    )
  }
}

AgencyRegistration.propTypes = {
  agencyData: PropTypes.object.isRequired
};

const reducer = 'agency';

const mapStateToProps = state => ({
  agencyData: state.get(reducer)
});

const AgencyRegistrationMapped = connect(
  mapStateToProps
)(AgencyRegistration);

export default AgencyRegistrationMapped;

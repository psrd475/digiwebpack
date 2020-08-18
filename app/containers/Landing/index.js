import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Welcome } from 'Components';
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
      <Welcome />
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

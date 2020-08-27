import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LoginForm } from 'Components';
import { makeSecureEncrypt } from 'Helpers/security';
import { postData } from 'Helpers/request';
import { setNotif } from 'Actions/NotifActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state
    const { setNotif } = this.props;

    const data = {
      email,
      password
    };

    postData(`${API_URL}/signin`, data)
      .then((res) => {
        if (res.status === 1) {
          if (typeof res.data === 'object') {
            try {
              localStorage.setItem('user', makeSecureEncrypt(JSON.stringify(res.data)));
              window.location.reload();
            } catch (e) {
              setNotif({ message: 'Private browsing mode is not supported in safari', variant: 'error' });
            }
          }
        } else {
          if (typeof (res.error) === 'string')
            setNotif({ message: res.error, variant: 'error' });
          else
            console.error(res.error);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { email, password } = this.state;

    return (
      <LoginForm
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

Login.propTypes = {
  setNotif: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setNotif: bindActionCreators(setNotif, dispatch)
});

const LoginMapped = connect(
  null,
  mapDispatchToProps
)(Login);

export default LoginMapped;

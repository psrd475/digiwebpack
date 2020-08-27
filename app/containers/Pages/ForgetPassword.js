import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setNotif } from 'Actions';

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { setNotif, history } = this.props;

    const { email } = this.state

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setNotif({ message: 'Email not valid', variant: 'error' });
    } else {
      const data = {
        email
      }
      console.log("data", data.email)
      console.log(this.props)
      history.push('/change-password')
    }

  }
  render() {
    return (
      <Fragment>
        <div className="login-layout">
          <div className="container ">
            <div className="login-box">
              <div className="mb-4">
                <img src="/images/Logo.png" alt="Zowar" />
              </div>
              <h1> نسيت كلمة السر</h1>
              <div className="form-group ">
                <label htmlFor={1} className="d-none col-form-label">
                </label>
                <input
                  type="email"
                  className="form-control"
                  id={1}
                  placeholder="البريد الاليكتروني"
                  name="email"
                  onChange={this.handleChange}
                />
                <div className="captcha my-3">
                  <img src="/images/captcha.gif" alt="google captcha" />
                </div>
                <div className="mt-3 d-flex justify-content-between">
                  <Link

                    onClick={this.handleSubmit}
                    className="btn btn-primary btn-block">
                    أرسال
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setNotif: bindActionCreators(setNotif, dispatch)
});

const ForgetPasswordMapped = connect(
  null,
  mapDispatchToProps
)(ForgetPassword);

export default ForgetPasswordMapped;

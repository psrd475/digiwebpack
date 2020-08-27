import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setNotif } from 'Actions';

class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {
      old_password: '',
      new_password: ''
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

    const { old_password, new_password } = this.state
    if (old_password.length <= 7 || old_password.length >= 15) {
      setNotif({ message: 'Old Password length is not valid', variant: 'error' });
    } else if (new_password.length <= 7 || new_password.length >= 15) {
      setNotif({ message: 'New Password length is not valid', variant: 'error' });
    } else {
      const data = {
        old_password,
        new_password
      }
      console.log("data", data.old_password, data.new_password)
      history.push('/login')
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
              <h1> إعادة تعيين كلمة السر</h1>
              <div className="form-group ">
                <label htmlFor={1} className="d-none col-form-label">
                  كلمة السر الجديدة
                </label>
                <input
                  type="password"
                  className="form-control"
                  id={1}
                  placeholder="Old Password"
                  name="old_password"
                  onChange={this.handleChange}
                />
                <label htmlFor={1} className="d-none col-form-label">
                  إعادة كلمة السر
                </label>
                <input
                  type="password"
                  className="form-control"
                  id={1}
                  placeholder="New Password"
                  name="new_password"
                  onChange={this.handleChange}
                />
                <div className="mt-3 d-flex justify-content-between">
                  <Link
                    onClick={this.handleSubmit}
                    className="btn btn-primary btn-block">
                    إرسال
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

const ChangePasswordMapped = connect(
  null,
  mapDispatchToProps
)(ChangePassword);

export default ChangePasswordMapped;
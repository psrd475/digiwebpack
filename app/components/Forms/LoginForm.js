import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  componentDidMount() {
    AOS.init();

    $('.dropdown-menu .form-group').click(function (e) {
      e.stopPropagation();
    });
  }

  render() {
    const { email, password, handleChange, handleSubmit } = this.props;

    return (
      <div className="login-layout">
        <div className="container ">
          <div className="login-box">
            <div className="mb-4">
              <img src="/images/Logo.png" alt="Zowar" />
            </div>
            <h1> تسجيل الدخول </h1>
            <div className="form-group ">
              <label htmlFor="email" className="d-none col-form-label">
                البريد الالكتروني
              </label>
              <input
                id="email"
                name="email"
                value={email}
                type="email"
                className="form-control"
                placeholder="البريد الالكتروني"
                onChange={handleChange}
              />
              <label htmlFor="password" className="d-none col-form-label">
                كلمة المرور
              </label>
              <input
                id="password"
                name="password"
                value={password}
                type="password"
                className="form-control"
                placeholder="كلمة المرور"
                onChange={handleChange}
              />
              <div className="my-3 d-flex justify-content-between align-items-center">
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input type="checkbox" className="custom-control-input" id="xx" />
                  <label className="custom-control-label" htmlFor="xx">
                    تذكرني
                  </label>
                </div>
                <Link
                  to="/foget-password"
                  className="btn-link text-primary">
                  نسيت كلمة السر
                </Link>
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <Link
                  to="#"
                  onClick={handleSubmit}
                  className="btn btn-primary btn-block">
                  دخول
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;

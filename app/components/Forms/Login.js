import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeSecureEncrypt } from 'Helpers/security';

import { postDataForm } from 'Helpers/request';
import { setNotif } from 'Actions/NotifActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }
  componentDidMount() {
    AOS.init();
    $('.dropdown-menu .form-group').click(function (e) {
      e.stopPropagation();
    });

    // switch language for demo
    var lan = document.querySelector('.toggle-lang');
    if (typeof (lan) != 'undefined' && lan != null) {
      lan.onchange = function () {
        var tag = document.querySelector('html');
        var tagdir = tag.dir;
        tagdir == 'ltr' ? tag.setAttribute('dir', 'rtl') : tag.setAttribute('dir', 'ltr');
      }
    }

    // Toggle mobile menu
    var nav = document.querySelector('.navbar-toggle');
    if (typeof (nav) != 'undefined' && nav != null) {
      nav.onclick = function () {
        var tabbody = document.querySelector('body');
        if (tabbody.classList.contains('nav-open')) {
          tabbody.classList.remove('nav-open');
        } else {
          tabbody.classList.add('nav-open');
        }
        // consol.log('working');
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state
    const { setNotif } = this.props;

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setNotif({ message: 'Email not valid', variant: 'error' });
    } else if (password.length <= 7 || password.length >= 15) {
      setNotif({ message: 'Password length is not valid', variant: 'error' });
    } else {
      const data = {
        email,
        password
      };
      console.log(data, "data")
      postDataForm(`${API_URL}/signin`, data)
        .then((res) => {
          console.log(res);
          if (res.status === 1) {
            localStorage.setItem('user', makeSecureEncrypt(JSON.stringify(res.data)));
            window.location.href = '/'
          }
          else {
            setNotif({ message: 'User does not exist', variant: 'error' });
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  render() {
    const { email, password } = this.state

    return (
      <Fragment>
        <div className="login-layout">
          <div className="container ">
            <div className="login-box">
              <div className="mb-4">
                <img src="/images/Logo.png" alt="Zowar" />
              </div>
              <h1> تسجيل الدخول </h1>
              <div className="form-group ">
                <label htmlFor={1} className="d-none col-form-label">
                  البريد الالكتروني
                </label>
                <input
                  type="email"
                  className="form-control"
                  id={1}
                  placeholder="البريد الالكتروني"
                  name="email"
                  onChange={this.handleChange}
                />
                <label htmlFor={2} className="d-none col-form-label">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  className="form-control"
                  id={2}
                  placeholder="كلمة المرور"
                  name="password"
                  onChange={this.handleChange}
                />
                <div className="my-3 d-flex justify-content-between align-items-center">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="xx" />
                    <label className="custom-control-label" htmlFor="xx">
                      تذكرني
            </label>
                  </div>
                  <a href="forget_password.html" className="btn-link text-primary">
                    نسيت كلمة السر
                  </a>
                </div>
                <div className="mt-3 d-flex justify-content-between">
                  <Link
                    // href="index.html"
                    onClick={this.handleSubmit}
                    className="btn btn-primary btn-block">
                    دخول
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

const LoginMapped = connect(
  null,
  mapDispatchToProps
)(Login);

export default LoginMapped;

// export default Login;
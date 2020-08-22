import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import countrydetails from '../../api/countrydetails';
import { setNotif } from 'Actions/NotifActions';
// import { postData } from 'Helpers/request';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      country: '',
      dialCode: '',
      mno: '',
      email: '',
      password: '',
      cpassword: '',
      message: '',
      variant: '',
      countryFlag: ''
    }
  }
  close = () => {
    this.setState({ message: '' });
  }
  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCountry = (e) => {
    const data = JSON.parse(e.target.value);
    this.setState({ country: data.name, dialCode: data.dial_code });
  }
  handleCode = (code, flag) => {
    this.setState({
      dailCode: code,
      countryFlag: flag
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { setNotif } = this.props;

    const { username, country, mno, email, password, cpassword } = this.state
    if (!/^[a-zA-Z][a-zA-Z0-9][a-zA-Z0-9]+$/.test(username)) {
      setNotif({ message: 'Username not valid', variant: 'error' });
    } else if (country === "-1") {
      setNotif({ message: 'country not valid', variant: 'error' });
    } else if ((!/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(mno)) && mno.length >= 13) {
      setNotif({ message: 'Phone not valid', variant: 'error' });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setNotif({ message: 'Email not valid', variant: 'error' });
    } else if (password.length <= 7 || password.length >= 15) {
      setNotif({ message: 'Password length is not valid', variant: 'error' });
    } else if (password !== cpassword) {
      setNotif({ message: 'Confirm Password do not match', variant: 'error' });
    } else {
      const data = {
        username,
        country,
        mno,
        email,
        password,
        cpassword
      };
      console.log(data, "data")
    }
  }
  render() {
    const { username, country, mno, email, password, cpassword, message, variant, countryFlag, dialCode } = this.state
    const countryname = countrydetails.map((item, index) => {
      return (
        <option key={index} value={JSON.stringify(item)}>{item.name}</option>
      )
    });

    const countrylist = countrydetails.map((item, index) => {
      return (
        <li
          key={index}
          className="iti__country iti__preferred"
          tabIndex={-1}
          id="iti-0__item-us-preferred"
          role="option"
          data-dial-code={1}
          data-country-code="{item.code.toLowerCase()}"
          aria-selected="false"
          onClick={() => this.handleCode(item.code, item.flag)}
        >
          <div className="iti__flag-box">
            <div className={`iti__flag iti__${item.code.toLowerCase()}`} />
          </div>
          <span className="iti__country-name">{item.name}</span>
          <span className="iti__dial-code">{item.dial_code}</span>
        </li>
      )
    })
    return (
      <Fragment>
        <div className="page-layout">
          <div className="container ">
            <nav aria-label="breadcrumb">
              <ol className="bg-transparent breadcrumb mb-2 p-0 small text-muted">
                <li className="breadcrumb-item">
                  <a href="#">الرئيسية</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  تسجيل حساب وكالة سفر
                </li>
              </ol>
            </nav>
            <div className="page-title">
              <h1 className="h1 text-primary"> تسجيل حساب وكالة سفر </h1>
            </div>
            <div className="bg-white p-4 border">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="form-group ">
                    {/* User Name */}
                    <label className="d-block col-form-label">اسم المستخدم </label>
                    <input type="text" className="form-control" name="username" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> الدولة</label>
                    <select id="country" name="country" className="form-control" onChange={this.handleCountry}>
                      <option value="-1"> Choose the Country  </option>
                      {countryname}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> رقم الجوال </label>
                    {/* <input type="number" class="form-control  form-mobile">                */}
                    <div className="input-group custom-dropdown dropdown">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Text input with dropdown button"
                        name="mno"
                        onChange={this.handleChange}
                      />
                      <div className="input-group-prepend ">
                        <button
                          className="dropdown-select"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          id="dLabel"
                        >
                          <span className="iti_num">{this.state.dialCode}</span>
                          <span className={`iti_flg iti__flag iti__${countryFlag}`} />
                          <i className="fas fa-angle-down fa-1x fa-fw" />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dLabel">
                          <ul>
                            {countrylist}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="form-group ">
                    <label className="d-block col-form-label">
                      البريد الاليكتروني
                    </label>
                    <input type="email" className="form-control" name="email" onChange={this.handleChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="form-group ">
                    <label htmlFor={2} className="d-block col-form-label">
                      كلمة المرور
                    </label>
                    <input type="password" className="form-control" name="password" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="form-group ">
                    <label htmlFor={2} className="d-block col-form-label">
                      تأكيد كلمة المرور
                    </label>
                    <input type="password" className="form-control is-invalid" name="cpassword" onChange={this.handleChange} />
                    <span className="text-danger small">
                      please inter same password again
            </span>
                  </div>
                </div>
              </div>
              <div className="btn-group mt-5">
                <a href="login.html" className="btn btn-default px-0">
                  الغاء التسجيل
                </a>
                <div>
                  {/* Sign Up */}
                  <a className="btn btn-primary ml-3" onClick={this.handleSubmit}>
                    تسجيل
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

// SignupForm.propTypes = {
//   showNotif: PropTypes.func.isRequired
// };

const mapDispatchToProps = dispatch => ({
  setNotif: bindActionCreators(setNotif, dispatch)
});

const RegisterMapped = connect(
  null,
  mapDispatchToProps
)(Register);

export default RegisterMapped;

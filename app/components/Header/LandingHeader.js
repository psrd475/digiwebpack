import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class LandingHeader extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/'
  }
  componentDidMount() {
    AOS.init();
    $('.dropdown-menu .form-group').click(function (e) {
      e.stopPropagation();
    });
  }
  render() {
    const isLoggedIn = localStorage.hasOwnProperty('user');
    // console.log("isLoggedIn", user);
    return (
      <Fragment>
        < header className="header" >
          <div className="container ">
            <button className="con navbar-toggle" type="button">
              <div className="bar top" />
              <div className="bar middle" />
              <div className="bar bottom" />
            </button>
            <div className="d-flex header-inner ">
              <a className="logo" href="index.html">
                <h1 className="d-none"> زوار</h1>
                <img src="/images/Logo.png" alt="Zowar" />
              </a>
              <div className="main-nav py-4">
                <ul className="d-flex top-nav  p-0 m-0">
                  <li>
                    <a href="layout.html" className="d-block mr-3 ">
                      <i className="fal fa-fw fa-thumbs-up mr-2 " />
                      <span>العروض الخاصة</span>
                    </a>
                  </li>
                  <li >
                    <a href="layout.html" className="d-block mr-3 ">
                      <i className="fal fa-fw fa-history mr-2 " />
                      <span>آخر عمليات البحث </span>
                    </a>
                  </li>
                </ul>
                <ul className="d-flex side-nav p-0 m-0">

                  <li>
                    <Link
                      to="/agency-register"
                      className="btn btn-outline-dark btn-sm mr-3"
                    >
                      اعرض برنامجك معنا
                    </Link>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="btn btn-outline-dark btn-sm mr-3 dropdown-toggle px-2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="pl-2">
                        SAR | تونس
                        <img
                          src="/images/flags/tunis.svg"
                          alt="tunis flag"
                          className="d-none d-md-inline ml-2"
                        />
                      </span>
                      <i className="fal fa-fw fa-1x fa-angle-down" />
                    </a>
                    <div className="dropdown-menu ">
                      <div className="d-flex form-group justify-content-between">
                        <label htmlFor="" className="w-50">

                          العملة
                    </label>
                        <select className="form-control form-control-sm">
                          <option> ريال سعودي </option>
                          <option> دولار </option>
                          <option> يورو </option>
                          <option> يوان صيني </option>
                        </select>
                      </div>
                      <div className="d-flex form-group justify-content-between">
                        <label htmlFor="" className="w-50">

                          الدولة
                    </label>
                        <select className="form-control form-control-sm">
                          <option> تونس </option>
                          <option> مصر </option>
                          <option> السودان </option>
                          <option> المغرب </option>
                        </select>
                      </div>
                      <div className="d-flex form-group justify-content-between">
                        {/* <a href="#f" class="btn btn-outline-light btn-sm mr-3 toggle-lang" >  ENGLISH  </a> */}
                        <label htmlFor="" className="w-50">

                          اللغة
                    </label>
                        <select className="form-control form-control-sm toggle-lang" onChange={this.langChange}>
                          <option> Arabic </option>
                          <option> English </option>
                          {/* <option> German    </option>   */}
                        </select>
                      </div>
                      <a
                        href="#"
                        className="btn btn-block btn-outline-primary btn-sm  px-2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        موافق
                  </a>
                    </div>
                  </li>

                  <li>
                    {isLoggedIn ?
                      <Link
                        // href="login.html"
                        onClick={this.handleLogout}
                        className="btn btn-outline-dark btn-sm ">
                        Log Out
                    </Link>
                      :
                      <Link
                        to="/login"
                        // href="login.html"
                        className="btn btn-outline-dark btn-sm ">
                        تسجيل دخول
                    </Link>
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header >
      </Fragment>
    )
  }
}
const redux = 'auth';

const mapStateToProps = state => ({
  isLoggedIn: state.getIn([redux, 'isLoggedIn'])
});

const LandingHeaderMapped = connect(
  mapStateToProps,
  null
)(LandingHeader);
export default LandingHeaderMapped;

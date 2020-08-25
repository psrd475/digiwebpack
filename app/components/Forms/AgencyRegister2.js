import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { storeStep2Data } from 'Actions/AgencyRegAction';
class AgencyRegister2 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init();
    $('.dropdown-menu .form-group').click(function (e) {
      e.stopPropagation();
    });
    $(function () {
      $('.form-date').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoApply: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'), 10)
      });
    });
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
    const { name, value } = e.target;
    const v = parseInt(value);
    let temp = this.props.LicenseData.set(name, v == 0 ? false : true);
    this.props.addInfo({ LicenseData: temp });
  }
  handleDataChange = (e) => {
    let LicenseData = this.props.LicenseData
    const { name, value } = e.target;
    let temp = LicenseData.set(name, value)
    this.props.addInfo({ LicenseData: temp });
  }
  handleFiles = (e) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].type.includes('pdf')) {
      let temp = this.props.LicenseData.set(e.target.name, e.target.files[0])
      this.props.addInfo({ LicenseData: temp });
    }
  }
  render() {
    let LicenseData = this.props.LicenseData;
    console.log("LicenseData", LicenseData.toJS());

    const agencyFFile = LicenseData.get('FFile').name;
    const agencyLicenceFile = LicenseData.get('LicenceFile').name;
    const agencyTFile = LicenseData.get('TFile').name;
    let ea = this.props.LicenseData.get('embassy_Available');
    let fa = this.props.LicenseData.get('FTAV_Available');
    let ta = this.props.LicenseData.get('TUTTA_Available');
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

                  تسجيل وكالة السفر
                </li>
              </ol>
            </nav>
            <div className="page-title">
              <h1 className="h1 text-primary"> تسجيل وكالة السفر </h1>
            </div>
            <div className="page-inner">
              <div className="border-bottom mb-4 mx-n4 px-4 pb-3">
                <div className="wizard-control">
                  <ul className="d-flex justify-content-center flex-column flex-md-row ">
                    <li className="nav-item ">
                      <div className="nav-link">
                        <span className="wizard-tabs-number">1</span>
                        <span className="wizard-tabs-title"> البيانات الاساسية </span>
                      </div>
                    </li>
                    <li className="nav-item active">
                      <div className="nav-link">
                        <span className="wizard-tabs-number">2</span>
                        <span className="wizard-tabs-title"> بيانات الترخيص </span>
                      </div>
                    </li>
                    <li className="nav-item ">
                      <div className="nav-link">
                        <span className="wizard-tabs-number">3</span>
                        <span className="wizard-tabs-title">

                          بيانات التواصل والفروع
                </span>
                      </div>
                    </li>
                    <li className="nav-item ">
                      <div className="nav-link">
                        <span className="wizard-tabs-number">4</span>
                        <span className="wizard-tabs-title"> تأكيد البيانات </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="wizard-details">
                <section>
                  <h3 className="text-primary"> ترخيص وزارة السياحة </h3>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              هل الوكالة مرخصة من قبل السفارة ؟
                            </label>
                            <div className="mt-2">
                              <div className="custom-control custom-radio  d-inline-block ">
                                <input
                                  id="yes1"
                                  type="radio"
                                  className="custom-control-input"
                                  //defaultChecked
                                  required
                                  name="embassy_Available"
                                  value="1"
                                  onChange={this.handleChange}
                                  defaultChecked={LicenseData.get('embassy_Available') == true ? "checked" : ''}
                                />
                                <label className="custom-control-label" htmlFor="yes1">
                                  نعم
                                </label>
                              </div>
                              <div className="custom-control custom-radio  d-inline-block  mx-3">
                                <input
                                  id="no1"
                                  type="radio"
                                  className="custom-control-input"
                                  required
                                  name="embassy_Available"
                                  value="0"
                                  onChange={this.handleChange}
                                  defaultChecked={LicenseData.get('embassy_Available') == false ? "checked" : ''}
                                />
                                <label className="custom-control-label" htmlFor="no1">
                                  لا
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              رقم الترخيص
                            </label>
                            <input type="text"
                              className="form-control"
                              name="LicenceNo"
                              onChange={this.handleDataChange}
                              readOnly={!ea}
                              value={LicenseData.get('LicenceNo')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              ملف الترخيص
                            </label>
                            <span className="form-control form-upload">

                              {
                                agencyLicenceFile ?
                                  <label>{agencyLicenceFile}</label>
                                  : <input type="file"
                                    name="LicenceFile"
                                    onChange={this.handleFiles}
                                    disabled={!ea}
                                  />
                              }

                            </span>
                            <span className="text-muted small"> صيغة PDF </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label  ">
                              تاريخ انشاء الترخيص
                    </label>
                            <input type="date"
                              className="form-control"
                              name="LicenceCreateDate"
                              onChange={this.handleDataChange}
                              readOnly={!ea}
                              value={LicenseData.get('LicenceCreateDate')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label  ">
                              تاريخ انتهاء الترخيص
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              name="LicenceExpiryDate"
                              onChange={this.handleDataChange}
                              readOnly={!ea}
                              value={LicenseData.get('LicenceExpiryDate')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <hr className="my-4" />
                <section>
                  <h3 className="text-primary"> التسجيل في FTAV</h3>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              هل الوكالة مسجلة لدى FTAV؟
                    </label>
                            <div className="mt-2">
                              <div className="custom-control custom-radio  d-inline-block ">
                                <input
                                  id="yes2"
                                  // name="aa2"
                                  type="radio"
                                  className="custom-control-input"
                                  required
                                  name="FTAV_Available"
                                  value="1"
                                  onChange={this.handleChange}
                                  defaultChecked={LicenseData.get('FTAV_Available') == true ? "checked" : ''}
                                />
                                <label className="custom-control-label" htmlFor="yes2">
                                  نعم
                                </label>
                              </div>
                              <div className="custom-control custom-radio  d-inline-block  mx-3">
                                <input
                                  id="no2"
                                  // name="aa2"
                                  type="radio"
                                  className="custom-control-input"
                                  required
                                  name="FTAV_Available"
                                  value="0"
                                  onChange={this.handleChange}
                                  defaultChecked={LicenseData.get('FTAV_Available') == false ? "checked" : ''}
                                />
                                <label className="custom-control-label" htmlFor="no2">
                                  لا
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              رقم العضوية
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="FMembershipNo"
                              onChange={this.handleDataChange}
                              readOnly={!fa}
                              value={LicenseData.get('FMembershipNo')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              ملف العضوية
                            </label>
                            <span className="form-control form-upload">
                              {
                                agencyFFile ?
                                  <label >{agencyFFile}</label>
                                  :
                                  <input
                                    type="file"
                                    name="FFile"
                                    onChange={this.handleFiles}
                                    disabled={!fa}

                                  />
                              }
                            </span>
                            <span className="text-muted small"> صيغة PDF </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label  ">
                              تاريخ انشاء العضوية
                            </label>
                            <input
                              type="date"
                              className="form-control "
                              name="FCreateDate"
                              onChange={this.handleDataChange}
                              readOnly={!fa}
                              value={LicenseData.get('FCreateDate')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label  ">
                              تاريخ انتهاء العضوية
                            </label>
                            <input
                              type="date"
                              className="form-control "
                              name="FExpiryDate"
                              onChange={this.handleDataChange}
                              readOnly={!fa}
                              value={LicenseData.get('FExpiryDate')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <hr className="my-4" />
                <section>
                  <h3 className="text-primary">
                    التسجيل في الجامعة التونسية لوكالات الأسفار والسياحة
                  </h3>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              هل الوكالة مسجلة لدى الجامعة التونسية لوكالات الأسفار
                              والسياحة ؟
                            </label>
                            <div className="mt-2">
                              <div className="custom-control custom-radio  d-inline-block ">
                                <input
                                  id="yes3"
                                  // name="aa3"
                                  type="radio"
                                  className="custom-control-input"
                                  defaultChecked
                                  required
                                  name="TUTTA_Available"
                                  value="1"
                                  onChange={this.handleChange}
                                  defaultChecked={LicenseData.get('TUTTA_Available') == true ? "checked" : ''}
                                />
                                <label className="custom-control-label" htmlFor="yes3">
                                  نعم
                                </label>
                              </div>
                              <div className="custom-control custom-radio  d-inline-block  mx-3">
                                <input
                                  id="no3"
                                  // name="aa3"
                                  type="radio"
                                  className="custom-control-input"
                                  required
                                  name="TUTTA_Available"
                                  value="0"
                                  onChange={this.handleChange}
                                  defaultChecked={LicenseData.get('TUTTA_Available') == false ? "checked" : ''}
                                />
                                <label className="custom-control-label" htmlFor="no3">
                                  لا
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              رقم العضوية
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="TMembershipNo"
                              onChange={this.handleDataChange}
                              readOnly={!ta}
                              value={LicenseData.get('TMembershipNo')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              ملف العضوية
                            </label>
                            <span className="form-control form-upload">

                              {agencyTFile ?
                                <label>{agencyTFile}</label>
                                : <input
                                  type="file"
                                  name="TFile"
                                  onChange={this.handleFiles}
                                  disabled={!ta}
                                />
                              }
                            </span>
                            <span className="text-muted small"> صيغة PDF </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label  ">
                              تاريخ انشاء العضوية
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              name="TCreateDate"
                              onChange={this.handleDataChange}
                              readOnly={!ta}
                              value={LicenseData.get('TCreateDate')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label  ">
                              تاريخ انتهاء العضوية
                            </label>
                            <input type="date"
                              className="form-control "
                              name="TExpiryDate"
                              onChange={this.handleDataChange}
                              readOnly={!ta}
                              value={LicenseData.get('TExpiryDate')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="btn-group mt-5">
                  <a href="login.html" className="btn btn-default px-0">
                    الغاء التسجيل
                  </a>
                  <div>
                    <Link
                      to="#"
                      onClick={this.props.goPrevious}
                      className="btn btn-outline-primary ml-3"
                    >
                      السابق
                    </Link>
                    <Link
                      to="#"
                      onClick={this.props.goNext}
                      className="btn btn-primary ml-3"
                    >
                      التالي
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

AgencyRegister2.propTypes = {
  addInfo: PropTypes.func.isRequired,
}
const redux = 'AgencyRegistration';

const mapStateToProps = state => ({
  LicenseData: state.getIn([redux, 'LicenseData'])
});

const mapDispatchToProps = dispatch => ({
  addInfo: bindActionCreators(storeStep2Data, dispatch),
});
const AgencyRegister2Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencyRegister2);
export default AgencyRegister2Mapped;
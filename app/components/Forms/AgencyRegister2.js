import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { agencyReg } from 'Actions/AgencyRegAction';

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
    let agencyData = this.props.agencyData
    const { name, value } = e.target;
    const v = parseInt(value);

    let agencyDat = agencyData.set(name, v == 0 ? false : true);
    this.props.agencyReg({ agencyData: agencyDat });
  }
  handleChangeE = (e) => {
    let embassy = this.props.agencyData.get('embassy')
    console.log("embassy", embassy);
    let agencyData = this.props.agencyData
    console.log("agencyData", agencyData);
    const { name, value } = e.target;

    let agencyDataembassy = embassy.set(name, value)
    let agencyDat = agencyData.set('embassy', agencyDataembassy);
    this.props.agencyReg({ agencyData: agencyDat });
  }
  handleChangeFTAV = (e) => {
    let ftav = this.props.agencyData.get('ftav')
    console.log("ftav", ftav);
    let agencyData = this.props.agencyData
    console.log("agencyData", agencyData);
    const { name, value } = e.target;

    let agencyDataFTAV = ftav.set(name, value)
    let agencyDat = agencyData.set('ftav', agencyDataFTAV);
    this.props.agencyReg({ agencyData: agencyDat });
  }
  handleChangeT = (e) => {
    let tutta = this.props.agencyData.get('tutta')
    console.log("tutta", tutta);
    let agencyData = this.props.agencyData
    console.log("agencyData", agencyData);
    const { name, value } = e.target;

    let agencyDataT = tutta.set(name, value)
    let agencyDat = agencyData.set('tutta', agencyDataT);
    this.props.agencyReg({ agencyData: agencyDat });
  }
  handleFiles = (e) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].type.includes('pdf')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#preview')
          .attr('src', e.target.result)
          .width(120)
          .height(120);
      };

      reader.readAsDataURL(e.target.files[0]);
      let embassy = this.props.agencyData.get('embassy')
      let agencyData = this.props.agencyData

      let agencyDataembassy = embassy.set(e.target.name, e.target.files[0])
      let agencyDat = agencyData.set('embassy', agencyDataembassy);
      this.props.agencyReg({ agencyData: agencyDat });
    }
  }
  handleFilesF = (e) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].type.includes('pdf')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#preview')
          .attr('src', e.target.result)
          .width(120)
          .height(120);
      };

      reader.readAsDataURL(e.target.files[0]);
      let ftav = this.props.agencyData.get('ftav')
      let agencyData = this.props.agencyData

      let agencyDataFTAV = ftav.set(e.target.name, e.target.files[0])
      let agencyDat = agencyData.set('ftav', agencyDataFTAV);
      this.props.agencyReg({ agencyData: agencyDat });
    }
  }
  handleFilesT = (e) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].type.includes('pdf')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#preview')
          .attr('src', e.target.result)
          .width(120)
          .height(120);
      };

      reader.readAsDataURL(e.target.files[0]);
      let tutta = this.props.agencyData.get('tutta')
      let agencyData = this.props.agencyData

      let agencyDataT = tutta.set(e.target.name, e.target.files[0])
      let agencyDat = agencyData.set('tutta', agencyDataT);
      this.props.agencyReg({ agencyData: agencyDat });
    }
  }
  render() {
    let agency = this.props.agencyData;
    console.log("agency", agency.toJS());
    let ea = this.props.agencyData.get('embassyAvailable');
    let fa = this.props.agencyData.get('ftavAvailable');
    let ta = this.props.agencyData.get('tuttaAvailable');
    // let eaj = ea.toJS();
    console.log("ta", ta);
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
                                  defaultChecked
                                  required
                                  name="embassyAvailable"
                                  value="1"
                                  onChange={this.handleChange}
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
                                  name="embassyAvailable"
                                  value="0"
                                  onChange={this.handleChange}
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
                              name="embassyLicenceno"
                              onChange={this.handleChangeE}
                              readOnly={!ea}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              ملف الترخيص
                            </label>
                            <span className="form-control form-upload">
                              <input type="file"
                                name="embassyLicenceFile"
                                onChange={this.handleFiles}
                                disabled={!ea}
                              />
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
                              name="embassyLicenceCreateDate"
                              onChange={this.handleChangeE}
                              readOnly={!ea}
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
                              name="embassyLicenceExpiryDate"
                              onChange={this.handleChangeE}
                              readOnly={!ea}
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
                                  defaultChecked
                                  required
                                  name="ftavAvailable"
                                  value="1"
                                  onChange={this.handleChange}
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
                                  name="ftavAvailable"
                                  value="0"
                                  onChange={this.handleChange}
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
                              name="ftavMembershipNo"
                              onChange={this.handleChangeFTAV}
                              readOnly={!fa}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              ملف العضوية
                            </label>
                            <span className="form-control form-upload">
                              <input
                                type="file"
                                name="ftavFile"
                                onChange={this.handleFilesF}
                                disabled={!fa}
                              />
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
                              name="ftavMembershipCreationDate"
                              onChange={this.handleChangeFTAV}
                              readOnly={!fa}
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
                              name="ftavMembershipExpiryDate"
                              onChange={this.handleChangeFTAV}
                              readOnly={!fa}
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
                                  name="tuttaAvailable"
                                  value="1"
                                  onChange={this.handleChange}
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
                                  name="tuttaAvailable"
                                  value="0"
                                  onChange={this.handleChange}
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
                              name="tuttaMembreshipNo"
                              onChange={this.handleChangeT}
                              readOnly={!ta}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              ملف العضوية
                            </label>
                            <span className="form-control form-upload">
                              <input
                                type="file"
                                name="tuttaMembreshipFile"
                                onChange={this.handleFilesT}
                                disabled={!ta}
                              />
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
                              name="tuttaMembreshipCreationDate"
                              onChange={this.handleChangeT}
                              readOnly={!ta}
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
                              name="tuttaMembreshipExpiryDate"
                              onChange={this.handleChangeT}
                              readOnly={!ta}
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

const redux = 'agencyreg';

const mapStateToProps = state => ({
  agencyData: state.getIn([redux, 'agencyData'])
});

const mapDispatchToProps = dispatch => ({
  agencyReg: bindActionCreators(agencyReg, dispatch)
});
const AgencyRegister2Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencyRegister2);
export default AgencyRegister2Mapped;
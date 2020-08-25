import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { storeStep3Data } from 'Actions/AgencyRegAction';
class AgencyRegister3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branchName: '',
      city: '',
      street: '',
      buildingNo: '',
      longitude: '',
      latitude: '',
      cellNo: '',
    }
  }
  componentDidMount() {
    AOS.init();
    $('.dropdown-menu .form-group').click(function (e) {
      e.stopPropagation();
    });
    $(document).ready(function () {
      // for demo only  
      // $('.demo-trigger-1').one("click", function () {
      //   $('.demo-1').hide();
      //   $('.demo').show();
      // });
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

  handleBranch = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    let temp = this.props.contactData.set(name, value);
    this.props.addInfo({ contactData: temp });
  }
  handleBranchSubmit = (e) => {
    const { branchName, city, street, buildingNo, longitude, latitude, cellNo } = this.state
    let addbranch = this.props.contactData.get('Branch').push({ branchName, city, street, buildingNo, longitude, latitude, cellNo });
    console.log(addbranch.toJS());
    let temp = this.props.contactData.set('Branch', addbranch);
    console.log(temp.toJS())
    this.props.addInfo({ contactData: temp });
  }
  render() {
    let contactData = this.props.contactData;
    console.log("contactData", contactData.toJS());

    const branchList = contactData.get('Branch').size;
    const { branchName, city, street, buildingNo, longitude, latitude, cellNo } = this.state
    const Branch = this.props.contactData.get('Branch');
    const branchData = Branch.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.branchName}</td>
          <td>{item.city}</td>
          <td>{item.street}</td>
          <td>{item.buildingNo}</td>
          <td>{item.longitude}, {item.latitude} </td>
          <td>{item.cellNo} </td>
          <td>
            <a
              href="#"
              className="table-action text-success"
              data-toggle="modal"
              data-target="#addbranch"
            >

              <i className="fal fa-fw fa-pencil-alt" />
            </a>
          </td>
          <td>
            <a
              href="#"
              className="table-action text-danger"
              data-toggle="modal"
              data-target="#deleteitem"
            >

              <i className="fal fa-fw fa-trash-alt" />
            </a>
          </td>
        </tr>
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

                  تسجيل وكالة السفر
                </li>
              </ol>
            </nav>
            <div className="page-title">
              <h1 className="h1 text-primary"> تسجيل وكالة السفر </h1>
            </div>
            <div className="page-inner overflow-hidden">
              <div className="border-bottom mb-4 mx-n4 px-4 pb-3">
                <div className="wizard-control">
                  <ul className="d-flex justify-content-center flex-column flex-md-row ">
                    <li className="nav-item ">
                      <div className="nav-link">
                        <span className="wizard-tabs-number">1</span>
                        <span className="wizard-tabs-title"> البيانات الاساسية </span>
                      </div>
                    </li>
                    <li className="nav-item ">
                      <div className="nav-link">
                        <span className="wizard-tabs-number">2</span>
                        <span className="wizard-tabs-title"> بيانات الترخيص </span>
                      </div>
                    </li>
                    <li className="nav-item active">
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
                  <h3 className="text-primary"> بيانات التواصل </h3>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              رقم الهاتف
                            </label>
                            <input
                              type="number"
                              className="form-control form-mobile"
                              name="TelNo"
                              onChange={this.handleChange}
                              value={contactData.get('TelNo')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              رقم الجوال
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="MobileNo"
                              onChange={this.handleChange}
                              value={contactData.get('MobileNo')}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              رقم الفاكس
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="FaxNo"
                              onChange={this.handleChange}
                              value={contactData.get('FaxNo')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              البريد الالكتروني
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="Email"
                              onChange={this.handleChange}
                              value={contactData.get('Email')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <hr className="my-4" />
                <section>
                  <div className="d-flex justify-content-between align-items-center my-4">
                    <h2 className="h3 text-primary m-0"> فروع وكالة السفر</h2>
                    <a
                      href="#"
                      className="btn btn-outline-primary btn-hover"
                      data-toggle="modal"
                      data-target="#addbranch"
                    >
                      اضافة فرع
                    </a>
                  </div>
                  <div className="demo-1 align-items-center bg-light border  display-4 flex-column justify-content-center mb-5 p-5 round text-center text-muted" style={{ display: branchList !== 0 && 'none' }}>
                    <i className="fal fa-fw fa-3x text-muted fa-building mb-4" />
                    <p className="text-muted m-0">
                      ليس لديك فروع حاليا ...
                      <a
                        href="#;"
                        className="d-inline-block border-bottom"
                        data-toggle="modal"
                        data-target="#addbranch"
                      >

                        اضافة فرع جديد ؟
                      </a>
                    </p>
                  </div>
                  <div className="demo" style={{ display: branchList == 0 && 'none' }}>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>اسم الفرع</th>
                            <th>المدينة</th>
                            <th>الشارع</th>
                            <th>رقم / اسم المبنى</th>
                            <th>الاحداثيات</th>
                            <th>الجوال</th>
                            <th>تعديل</th>
                            <th>حذف</th>
                          </tr>
                        </thead>
                        <tbody>
                          {branchData}
                        </tbody>
                      </table>
                    </div>
                    <div className="branch-map">
                      {/* this map should contain marks for each branch location */}
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104888.4757581263!2d10.663058829797!3d34.76151547712517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002cda1486c695%3A0x22dfe0a62c50ce6f!2sSfax%2C%20Tunisia!5e0!3m2!1sen!2ssa!4v1570107555457!5m2!1sen!2ssa"
                        width="100%"
                        height={216}
                        frameBorder={0}
                        style={{ border: 0 }}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </section>
                <div className="btn-group mt-5">
                  <a href="login.html" className="btn btn-default px-0">

                    الغاء التسجيل
          </a>
                  <div>
                    <Link
                      // href="Agency_Registeration_2.html"
                      onClick={this.props.goPrevious}
                      className="btn btn-outline-primary ml-3"
                    >
                      السابق
                    </Link>
                    <Link
                      // href="Agency_Registeration_4.html"
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
        <div>
          <div
            className="modal fade"
            id="addbranch"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    إضافة فرع
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group ">
                        <label className="d-block col-form-label"> اسم الفرع</label>
                        <input
                          type="text"
                          className="form-control"
                          name="branchName"
                          onChange={this.handleBranch} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group ">
                        <label className="d-block col-form-label"> المدينة </label>
                        <select className="form-control" name="city" onChange={this.handleBranch}>
                          <option value=" "> Choose the Branch City </option>
                          <option value='Indore'>Indore</option>
                          <option value='Reva'>Reva</option>
                          <option value='Bhopal'>Bhopal</option>
                          <option value='Dewas'>Dewas</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group ">
                        <label className="d-block col-form-label"> الشارع </label>
                        <input
                          type="text"
                          className="form-control"
                          name="street"
                          onChange={this.handleBranch} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group ">
                        <label className="d-block col-form-label">
                          رقم / اسم المبنى
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="buildingNo"
                          onChange={this.handleBranch} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group ">
                        <label className="d-block col-form-label"> الاحداثيات </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="longitude"
                            name="longitude"
                            onChange={this.handleBranch}
                          />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="latitude"
                            name="latitude"
                            onChange={this.handleBranch}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group ">
                        <label className="d-block col-form-label"> الجوال </label>
                        <input
                          type="text"
                          className="form-control"
                          name="cellNo"
                          onChange={this.handleBranch} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary mr-2"
                    data-dismiss="modal"
                  >
                    إلغاء
          </button>
                  <button
                    type="button"
                    className="btn btn-primary  btn-hover demo-trigger-1"
                    data-dismiss="modal"
                    onClick={this.handleBranchSubmit}
                  >
                    حفظ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="deleteitem"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">

                    هل انت متأكد من حذف هذا الفرع ؟
          </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="bg-light font-weight-bold p-3"> فرع الشهداء </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-2"
                    data-dismiss="modal"
                  >
                    إلغاء
          </button>
                  <button
                    type="button"
                    className="btn btn-danger "
                    data-dismiss="modal"
                  >
                    تأكيد الحذف
          </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

AgencyRegister3.propTypes = {
  addInfo: PropTypes.func.isRequired,
}
const redux = 'AgencyRegistration';

const mapStateToProps = state => ({
  contactData: state.getIn([redux, 'contactData'])
});

const mapDispatchToProps = dispatch => ({
  addInfo: bindActionCreators(storeStep3Data, dispatch)
});
const AgencyRegister3Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencyRegister3);
export default AgencyRegister3Mapped;

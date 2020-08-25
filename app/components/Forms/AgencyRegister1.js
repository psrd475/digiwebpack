import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import countrydetails from '../../api/countrydetails';
import { agencyReg } from 'Actions/AgencyRegAction';
import { setNotif } from 'Actions/NotifActions';

class AgencyRegister1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownersname: '',
      idnumber: '',
      mobilenumber: '',
    }
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
    $(document).ready(function () {
      // for demo only  
      $('.demo-trigger-1').one("click", function () {
        $('.demo-1').hide();
        $('.demo').show();
      });
    });
    // var lan = document.querySelector('.toggle-lang');
    // if (typeof (lan) != 'undefined' && lan != null) {
    //   lan.onchange = function () {
    //     var tag = document.querySelector('html');
    //     var tagdir = tag.dir;
    //     tagdir == 'ltr' ? tag.setAttribute('dir', 'rtl') : tag.setAttribute('dir', 'ltr');
    //   }
    // }

    // // Toggle mobile menu
    // var nav = document.querySelector('.navbar-toggle');
    // if (typeof (nav) != 'undefined' && nav != null) {
    //   nav.onclick = function () {
    //     var tabbody = document.querySelector('body');
    //     if (tabbody.classList.contains('nav-open')) {
    //       tabbody.classList.remove('nav-open');
    //     } else {
    //       tabbody.classList.add('nav-open');
    //     }
    //     // consol.log('working');
    //   }
    // }
  }
  handleOwner = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleOwnerSubmit = (e) => {
    const { ownersname, idnumber, mobilenumber } = this.state

    const addowner = this.props.agencyData.get('addowner').push({ ownersname, idnumber, mobilenumber });
    let tem = this.props.agencyData;
    tem = tem.set('addowner', addowner);

    this.props.agencyReg({ agencyData: tem });

    this.setState({ ownersname: '', idnumber: '', mobilenumber: '' })
  }
  handleChange = (e) => {
    // if (!/^[a-zA-Z]+$/.test(travelagencyname)) {
    //   setNotif({ message: 'travelagencyname not valid', variant: 'error' });
    // }
    // else {
    let agencyData = this.props.agencyData
    const { name, value } = e.target;

    let agencyDat = agencyData.set(name, value);
    this.props.agencyReg({ agencyData: agencyDat });
    // }
  }
  // handlefiles = (e) => {
  //   let agencyData = this.props.agencyData
  //   const { name, value } = e.target;

  //   let agencyDat = agencyData.set(name, value);
  //   this.props.agencyReg({ agencyData: agencyDat });
  // }
  handlefiles = (e) => {
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

    let agencyData = this.props.agencyData.get('addowner');
    const countryname = countrydetails.map((item, index) => {
      return (
        <option key={index} value={item.name}>{item.name}</option>
      )
    })

    const ownerData = agencyData.map((v, k, i) => {
      return (
        <tr key={k}>
          <td>{v.ownersname}</td>
          <td>{v.idnumber}</td>
          <td>{v.mobilenumber}</td>
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
              onClick={this.deleteChange}
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
            <div className="page-inner">
              <div className="border-bottom mb-4 mx-n4 px-4 pb-3">
                <div className="wizard-control">
                  <ul className="d-flex justify-content-center flex-column flex-md-row ">
                    <li className="nav-item active">
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
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              اسم وكالة السفر
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="travelagencyname"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label"> الدولة</label>
                            <select
                              id="country"
                              name="country"
                              className="form-control"
                              onChange={this.handleChange}
                            >
                              <option value=" "> Choose the Country  </option>
                              {countryname}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              تصنيف الوكالة
                            </label>
                            <select className="form-control" name="agencyclassification" onChange={this.handleChange}>
                              <option value=" "> Choose the Agency Classification  </option>
                              <option value="Travel and tourism company">شركة للسياحة والسفر</option>
                              <option value="Transportation and delivery company">شركة نقل وتوصيل</option>
                              <option value="Company x">شركة x</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              الموقع الالكتروني - اختياري
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="www.example.com"
                              name="website"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              رقم السجل التجاري
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="commercialregistrationno"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              إرفاق ملف السجل التجاري
                            </label>
                            <span className="form-control form-upload">
                              <input type="file" name="commercialregistryfile" onChange={this.handlefiles} />
                            </span>
                            <span className="text-muted small"> صيغة PDF </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label  ">
                              تاريخ انشاء السجل التجاري
                            </label>
                            <input type="date" className="form-control" name="creatingdatecommercialregistry"
                              onChange={this.handleChange} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label  ">
                              تاريخ انتهاء السجل التجاري
                            </label>
                            <input type="date" className="form-control" name="expirydatecommercialregistration" onChange={this.handleChange} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="d-block col-form-label">
                              نبذة عن وكالة السفر
                            </label>
                            <textarea
                              className="form-control"
                              rows={4}
                              defaultValue=""
                              name="about"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-3 offset-lg-1  text-center mt-3 pt-3">
                      <label
                        className="mb-2 p-5 form-upload-img d-flex justify-content-center align-items-center flex-column overflow-hidden"
                        htmlFor="upload-photo"
                      >
                        <div className="ttl mb-3">
                          <span className="d-block mb-3 ">
                            <i className="fal fa-2x fa-upload" />
                          </span>
                          <span className="d-block">رفع صورة </span>
                          <span className="d-block">شعار الوكالة</span>
                        </div>
                        <div className="file-input-mask">
                          <input type="file" id="upload-photo" name="uploadphoto" onChange={this.handlefiles} />
                        </div>
                      </label>
                      <span className="text-muted small"> صيغة jpg,png,svg </span>
                    </div>
                  </div>
                </section>
                <hr className="my-5" />
                <section>
                  <div className="d-flex justify-content-between align-items-center my-4">
                    <h3 className="text-primary m-0">
                      بيانات مالك / ملاك وكالة السفر
                    </h3>
                    <a
                      href="#;"
                      // to="#"
                      className="btn btn-outline-primary btn-hover"
                      data-toggle="modal"
                      data-target="#addbranch"
                    >
                      اضافة مالك
                    </a>
                  </div>
                  <div className="demo-1 align-items-center bg-light border  display-4 flex-column justify-content-center mb-5 p-5 round text-center text-muted">
                    <i className="fal fa-fw fa-4x text-muted fa-users mb-4" />
                    <p className="text-muted m-0">
                      لا يوجد ملاك حاليا ...
                      <a
                        href="#"
                        className="d-inline-block border-bottom"
                        data-toggle="modal"
                        data-target="#addbranch"
                      >
                        اضافة مالك جديد ؟
              </a>
                    </p>
                  </div>
                  <div className="demo" style={{ display: "none" }}>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>اسم المالك</th>
                            <th>رقم الهوية</th>
                            <th> رقم الجوال</th>
                            <th>تعديل</th>
                            <th>حذف</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ownerData}
                        </tbody>
                      </table>
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
          {/* Modal */}
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

                    إضافة مالك
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
                        <label className="d-block col-form-label"> اسم المالك </label>
                        <input type="text" className="form-control" name="ownersname" onChange={this.handleOwner} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group ">
                        <label className="d-block col-form-label"> رقم الهوية </label>
                        <input type="text" className="form-control" name="idnumber" onChange={this.handleOwner} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group ">
                        <label className="d-block col-form-label"> رقم الجوال </label>
                        <input type="text" className="form-control" name="mobilenumber" onChange={this.handleOwner} />
                      </div>
                    </div>
                  </div>
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
                    className="btn btn-primary demo-trigger-1"
                    data-dismiss="modal"
                    onClick={this.handleOwnerSubmit}
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
                    هل انت متأكد من حذف هذا المالك ؟
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
                  <p className="bg-light font-weight-bold p-3"> {this.state.ownersname} </p>
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
      </Fragment >
    )
  }
}

const redux = 'agencyreg';

const mapStateToProps = state => ({
  agencyData: state.getIn([redux, 'agencyData'])
});

const mapDispatchToProps = dispatch => ({
  agencyReg: bindActionCreators(agencyReg, dispatch),
  setNotif: bindActionCreators(setNotif, dispatch)
});
const AgencyRegister1Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencyRegister1);
export default AgencyRegister1Mapped;
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { } from 'Actions/AgencyRegAction';
import { lib } from 'crypto-js';
import { postFormData } from 'Helpers/request';

class AgencyRegister4 extends Component {
  constructor(props) {
    super(props);
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


  handleSubmit = (e) => {
    console.log("click")
    e.preventDefault();
    const { agencyData, contactData, LicenseData } = this.props;
    var data = new FormData();
    const OwnerList = agencyData.get('OwnerList').toJS();
    const Branch = contactData.get('Branch').toJS();
    console.log(OwnerList)
    console.log(Branch)
    data.append("agency_name", agencyData.get('Name'))
    data.append("email", contactData.get('Email'))
    data.append("agency_logo", agencyData.get('AgencyLogo'))
    data.append("phone_number", contactData.get('MobileNo'))
    data.append("telephone_number", contactData.get('TelNo'))
    data.append("fax_number", contactData.get('FaxNo'))
    data.append("category", agencyData.get('Classification'))
    data.append("country", agencyData.get('Country'))
    data.append("website", agencyData.get('Website'))
    data.append("agency_description", agencyData.get('About'))
    data.append("commercial_registration_no", agencyData.get('RegisterNo'))
    data.append("commercial_registration_file", agencyData.get('RegistryFile'))
    data.append("commercial_registration_date", agencyData.get('CreateDate'))
    data.append("commercial_registration_expiry_date", agencyData.get('ExpiryDate'))
    data.append("embassy_licensed", LicenseData.get('embassy_Available'))
    data.append("FTAV_registration", LicenseData.get('FTAV_Available'))
    data.append("TUTTA_registration", LicenseData.get('TUTTA_Available'))
    data.append("agency_owners", JSON.stringify(OwnerList))
    data.append("agency_braches", JSON.stringify(Branch))

    if (LicenseData.get('embassy_Available')) {
      data.append("embassy_license_no", LicenseData.get('LicenceNo'))
      data.append("embassy_license_file", LicenseData.get('LicenceFile'))
      data.append("embassy_license_date", LicenseData.get('LicenceCreateDate'))
      data.append("embassy_license_expiry_date", LicenseData.get('LicenceExpiryDate'))
    }
    else {
      data.append("embassy_license_no", null)
      data.append("embassy_license_file", null)
      data.append("embassy_license_date", null)
      data.append("embassy_license_expiry_date", null)
    }

    if (LicenseData.get('FTAV_Available')) {
      data.append("FTAV_membership_no", LicenseData.get('FMembershipNo'))
      data.append("FTAV_membership_file", LicenseData.get('FFile'))
      data.append("FTAV_membership_date", LicenseData.get('FCreateDate'))
      data.append("FTAV_membership_expiry_date", LicenseData.get('FExpiryDate'))
    }

    else {
      data.append("FTAV_membership_no", null)
      data.append("FTAV_membership_file", null)
      data.append("FTAV_membership_date", null)
      data.append("FTAV_membership_expiry_date", null)
    }
    if (LicenseData.get('TUTTA_Available')) {
      data.append("TUTTA_membership_no", LicenseData.get('TMembershipNo'))
      data.append("TUTTA_membership_file", LicenseData.get('TFile'))
      data.append("TUTTA_membership_date", LicenseData.get('TCreateDate'))
      data.append("TUTTA_membership_expiry_date", LicenseData.get('TExpiryDate'))
    }
    else {
      data.append("TUTTA_membership_no", null)
      data.append("TUTTA_membership_file", null)
      data.append("TUTTA_membership_date", null)
      data.append("TUTTA_membership_expiry_date", null)

    }

    for (var value of data.values()) {
      console.log(value);
    }
    postFormData(`${API_URL}/agency/registration`, data)
      .then((res) => {
        if (res.status === 1) {
          // window.location.reload();
        } else {
          console.log(error);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  render() {
    const { agencyData, contactData, LicenseData } = this.props;
    console.log(agencyData.toJS())
    console.log(contactData.toJS())
    console.log(LicenseData.toJS())
    const regFile = agencyData.get('RegistryFile').name;
    const agencyLicenceFile = LicenseData.get('LicenceFile').name;
    const agencyFFile = LicenseData.get('FFile').name;
    const agencyTFile = LicenseData.get('TFile').name;
    const addOwnerData = agencyData.get('OwnerList');
    const ownerData = addOwnerData.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.ownersname}</td>
          <td>{item.idnumber}</td>
          <td>{item.mobilenumber}</td>
        </tr>)
    })
    const Brance = contactData.get('Branch')
    const renderBrance = Brance.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.branchName}</td>
          <td>{item.city}</td>
          <td>{item.street}</td>
          <td>{item.buildingNo}</td>
          <td>{item.longitude}, {item.latitude}</td>
          <td>{item.cellNo} </td>
        </tr>)
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
                    <li className="nav-item ">
                      <div className="nav-link">
                        <span className="wizard-tabs-number">3</span>
                        <span className="wizard-tabs-title">

                          بيانات التواصل والفروع
                </span>
                      </div>
                    </li>
                    <li className="nav-item active">
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
                  <h3 className="text-primary"> البيانات الاساسية </h3>
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
                              readOnly
                              className="form-control-plaintext"

                              value={agencyData.get('Name')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label"> الدولة </label>
                            <input
                              type="text"
                              readOnly
                              className="form-control-plaintext"

                              value={agencyData.get('Country')}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              تصنيف الوكالة
                            </label>
                            <input
                              type="text"
                              readOnly
                              className="form-control-plaintext"

                              value={agencyData.get('Classification')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              الموقع الالكتروني
                            </label>
                            <input
                              type="text"
                              readOnly
                              className="form-control-plaintext"
                              value={agencyData.get('Website')}
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
                              readOnly
                              className="form-control-plaintext"
                              value={agencyData.get('RegisterNo')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              ارفاق ملف السجل التجاري
                            </label>
                            {/* <a
                              className="underline p-1 d-inline-block"
                              href="#downloadfile"
                            >
                              {/* {agencyData.get('RegistryFile')} *
                              شركة ام القرى للحج والعمرة.pdf
                            </a> */}
                            {regFile ?
                              <label>{regFile}</label>
                              :
                              ''
                            }
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label  ">
                              تاريخ انشاء السجل التجاري
                            </label>
                            <input
                              type="text"
                              className="form-control-plaintext"
                              readOnly
                              value={agencyData.get('CreateDate')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label  ">
                              تاريخ انتهاء السجل التجاري
                            </label>
                            <input
                              type="text"
                              className="form-control-plaintext"
                              value={agencyData.get('ExpiryDate')}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              نبذة عن وكالة السفر
                            </label>
                            <textarea
                              className="form-control-plaintext"
                              rows={4}
                              value={agencyData.get('About')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-5 offset-lg-1">
                      <div className="bg-white border flag-info overflow-hidden py-5 round">
                        <span className="p-4 d-block">
                          <img
                            src=""
                            // src={`${agencyData.get('uploadphoto')}`}
                            alt="company logo"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
                <hr className="my-4 mx-n4" />
                <section>
                  <h3 className="text-primary"> بيانات مالك / ملاك وكالة السفر </h3>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>اسم المالك</th>
                          <th>رقم الهوية</th>
                          <th> رقم الجوال</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ownerData}
                      </tbody>
                    </table>
                  </div>
                </section>
                <hr className="my-4 mx-n4" />
                <section>
                  <h3 className="text-primary"> ترخيص وزارة السياحة</h3>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              رقم الترخيص
                            </label>
                            <input
                              type="text"
                              className="form-control-plaintext"
                              readOnly
                              value={LicenseData.get('LicenceNo')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              ملف الترخيص
                            </label>
                            {/* <a
                              className="underline p-1 d-inline-block"
                              href="#downloadfile"
                            > */}
                            {
                              agencyLicenceFile ?
                                <label className="underline p-1 d-inline-block" >{agencyLicenceFile}</label>
                                :
                                ''
                            }
                            {/* {LicenseData.get('LicenceFile')} */}
                            {/* </a> */}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label  ">
                              تاريخ انشاء الترخيص
                            </label>
                            <input
                              type="text"
                              className="form-control-plaintext"
                              readOnly
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
                              type="text"
                              className="form-control-plaintext"
                              readOnly
                              value={LicenseData.get('LicenceExpiryDate')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <hr className="my-4 mx-n4" />
                <section>
                  <h3 className="text-primary"> التسجيل في FTAV </h3>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              رقم العضوية
                            </label>
                            <input
                              type="text"
                              className="form-control-plaintext"
                              readOnly
                              value={LicenseData.get('FMembershipNo')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">

                              ملف العضوية
                            </label>
                            {/* <a
                              className="underline p-1 d-inline-block"
                              href="#downloadfile"

                            > */}
                            {/* {LicenseData.get('FFile')} */}
                            {/* </a> */}
                            {
                              agencyFFile ?
                                <label className="underline p-1 d-inline-block">{agencyFFile}</label>
                                :
                                ' '
                            }

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
                              type="text"
                              className="form-control-plaintext"
                              readOnly
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
                              type="text"
                              className="form-control-plaintext"
                              readOnly
                              value={LicenseData.get('FExpiryDate')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <hr className="my-4 mx-n4" />
                <section>
                  <h3 className="text-primary">

                    التسجيل في الجامعة التونسية لوكالات الأسفار والسياحة
          </h3>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">

                              رقم العضوية
                            </label>
                            <input
                              type="text"
                              className="form-control-plaintext"
                              readOnly
                              value={LicenseData.get('TMembershipNo')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">

                              ملف العضوية
                            </label>
                            {/* <a
                              className="underline p-1 d-inline-block"
                              href="#downloadfile"
                            >
                              {/* {LicenseData.get('TFile')} *
                            </a> */}
                            {
                              agencyTFile ?
                                <label className="underline p-1 d-inline-block">{agencyTFile}</label>
                                :
                                ''
                            }
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
                              type="text"
                              className="form-control-plaintext"
                              readOnly
                              value={LicenseData.get('TCreateDate')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label  ">

                              تاريخ انتهاء العضوية
                            </label>
                            <input
                              type="text"
                              className="form-control-plaintext"
                              readOnly
                              value={LicenseData.get('TExpiryDate')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <hr className="my-4 mx-n4" />
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
                              className="form-control-plaintext"
                              readOnly
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
                              className="form-control-plaintext"
                              readOnly
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
                              className="form-control-plaintext"
                              readOnly
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
                              className="form-control-plaintext"
                              readOnly
                              value={contactData.get('Email')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <hr className="my-4 mx-n4" />
                <section>
                  <h3 className="text-primary"> بيانات الفروع </h3>
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
                        </tr>
                      </thead>
                      <tbody>
                        {renderBrance}
                      </tbody>
                    </table>
                  </div>
                  <div className="branch-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104888.4757581263!2d10.663058829797!3d34.76151547712517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002cda1486c695%3A0x22dfe0a62c50ce6f!2sSfax%2C%20Tunisia!5e0!3m2!1sen!2ssa!4v1570107555457!5m2!1sen!2ssa"
                      width="100%"
                      height={216}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </div>
                </section>
                <section className="bg-light  mx-n4 p-4 px-4 mt-5">
                  <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                    <input type="checkbox" className="custom-control-input" id="xx" />
                    <label className="custom-control-label" htmlFor="xx">
                      اقر بمسوؤليتي عن صحة البيانات السابقة والتي تتوافق مع البيانات
                      المسجلة حكوميا
            </label>
                  </div>
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="ss" />
                    <label className="custom-control-label" htmlFor="ss">
                      اقر بالموافقة على الشروط والاحكام الخاصة بتسجيل الوكالة بعد
                      قراءتها
            </label>
                  </div>
                </section>
                <div className="btn-group">
                  <a href="login.html" className="btn btn-default px-0">

                    الغاء التسجيل
                  </a>
                  <div>
                    <Link to="#"
                      className="btn btn-outline-primary ml-3"
                      onClick={this.props.goPrevious}
                    >
                      السابق
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-primary ml-3"
                      onClick={this.handleSubmit}
                    >
                      تأكيد
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment >
    )
  }
}

const redux = 'AgencyRegistration';
const mapStateToProps = state => ({
  agencyData: state.getIn([redux, 'agencyData']),
  LicenseData: state.getIn([redux, 'LicenseData']),
  contactData: state.getIn([redux, 'contactData'])
});


const AgencyRegister4Mapped = connect(
  mapStateToProps,
  null
)(AgencyRegister4);
export default AgencyRegister4Mapped;


// export default AgencyRegister4;
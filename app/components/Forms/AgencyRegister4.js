import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { agencyReg } from 'Actions/AgencyRegAction';

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
  render() {
    let agencyData = this.props.agencyData
    console.log("agency4", agencyData.toJS());

    let embassyData = this.props.agencyData.get('embassy');
    console.log("agency4", embassyData.toJS());

    let addOwnerData = this.props.agencyData.get('addowner');
    const ownerData = addOwnerData.map((v, k, i) => {
      return (
        <tr key={k}>
          <td>{v.ownersname}</td>
          <td>{v.idnumber}</td>
          <td>{v.mobilenumber}</td>
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
                              // defaultValue="وكالة مملكة تونس للأسفار و السياحة"
                              value={agencyData.get('travelagencyname')}
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
                              // defaultValue=" تونس "
                              value={agencyData.get('country')}
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
                              // defaultValue="شركة للسياحة والسفر"
                              value={agencyData.get('agencyclassification')}
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
                              // defaultValue="info@mycompany.com"
                              value={agencyData.get('website')}
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
                              defaultValue={43534876543}
                              value={agencyData.get('commercialregistrationno')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              ارفاق ملف السجل التجاري
                            </label>
                            <a
                              className="underline p-1 d-inline-block"
                              href="#downloadfile"
                            >
                              {/* {agencyData.get('commercialregistryfile')} */}
                              شركة ام القرى للحج والعمرة.pdf
                            </a>
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
                              // defaultValue="11/5/2020"
                              value={agencyData.get('creatingdatecommercialregistry')}
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
                              // defaultValue="11/5/2020"
                              value={agencyData.get('expirydatecommercialregistration')}
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
                              // defaultValue={
                              //   "تمكنا نتيجة لخبرتنا السابقة في مجال السفر و السياحة أن نكتسب قاعدة للحرفاء متنامية يوما بعد يوم مما عزز عدد الزبائن و خاصة ثقتهم على مدى السنوات الماضية .  لآرائهم و بدلك تواصل مملكة تونس للأسفار و السياحة التطوير و التوسيع في عروضها ومنتجاتها."
                              // }
                              value={agencyData.get('about')}
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
                              // defaultValue={125654}
                              value={embassyData.get('embassyLicenceno')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">
                              ملف الترخيص
                            </label>
                            <a
                              className="underline p-1 d-inline-block"
                              href="#downloadfile"
                            >
                              {/* {embassyData.get('embassyLicenceFile')} */}
                              file-name.pdf
                            </a>
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
                              // defaultValue="11/5/2020"
                              value={embassyData.get('embassyLicenceCreateDate')}
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
                              // defaultValue="11/5/2020"
                              value={embassyData.get('embassyLicenceExpiryDate')}
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
                              defaultValue={125654}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">

                              ملف العضوية
                            </label>
                            <a
                              className="underline p-1 d-inline-block"
                              href="#downloadfile"
                            >

                              file-name.pdf
                            </a>
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
                              defaultValue="11/5/2020"
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
                              defaultValue="11/5/2020"
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
                              defaultValue={125654}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="d-block col-form-label">

                              ملف العضوية
                            </label>
                            <a
                              className="underline p-1 d-inline-block"
                              href="#downloadfile"
                            >

                              file-name.pdf
                            </a>
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
                              defaultValue="11/5/2020"
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
                              defaultValue="11/5/2020"
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
                              defaultValue={45346545}
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
                              defaultValue={23423425}
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
                              defaultValue={234234234}
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
                              defaultValue="info@mycompany.com"
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
                        <tr>
                          <td>فرع الشهداء</td>
                          <td>صفاقس</td>
                          <td>طريق العين</td>
                          <td>143 الجديدة</td>
                          <td> 21،434535 21،4345352</td>
                          <td>05856465456</td>
                        </tr>
                        <tr>
                          <td>فرع الشهداء</td>
                          <td>صفاقس</td>
                          <td>طريق العين</td>
                          <td>143 الجديدة</td>
                          <td> 21،434535 21،4345352</td>
                          <td>05856465456</td>
                        </tr>
                        <tr>
                          <td>فرع الشهداء</td>
                          <td>صفاقس</td>
                          <td>طريق العين</td>
                          <td>143 الجديدة</td>
                          <td> 21،434535 21،4345352</td>
                          <td>05856465456</td>
                        </tr>
                        <tr>
                          <td>فرع الشهداء</td>
                          <td>صفاقس</td>
                          <td>طريق العين</td>
                          <td>143 الجديدة</td>
                          <td> 21،434535 21،4345352</td>
                          <td>05856465456</td>
                        </tr>
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
                    <Link
                      to="#"
                      className="btn btn-outline-primary ml-3"
                      onClick={this.props.goPrevious}
                    >
                      السابق
                    </Link>
                    <Link
                      to="#"
                      // onClick={this.props.}
                      className="btn btn-primary ml-3"
                    >
                      تأكيد
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
const AgencyRegister4Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencyRegister4);
export default AgencyRegister4Mapped;


// export default AgencyRegister4;
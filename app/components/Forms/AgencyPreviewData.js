import React, { Component, Fragment } from 'react';

class AgencyPreviewData extends Component {
  render() {
    return (
      <Fragment>
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
                    // value={agencyData.get('Name')}
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
                    // value={agencyData.get('Country')}
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
                    // value={agencyData.get('Classification')}
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
                    // value={agencyData.get('Website')}
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
                    // value={agencyData.get('RegisterNo')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">
                      ارفاق ملف السجل التجاري
                    </label>
                    {/* {regFile ?
                      <label>{regFile}</label>
                      :
                      ''
                    } */}
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
                    // value={agencyData.get('CreateDate')}
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
                      // value={agencyData.get('ExpiryDate')}
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
                    // value={agencyData.get('About')}
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
                {/* {ownerData} */}
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
                    // value={LicenseData.get('LicenceNo')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">
                      ملف الترخيص
                    </label>
                    {/* {
                      agencyLicenceFile
                        ?
                        <label className="underline p-1 d-inline-block" >{agencyLicenceFile}</label>
                        :
                        ''
                    } */}
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
                    // value={LicenseData.get('LicenceCreateDate')}
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
                    // value={LicenseData.get('LicenceExpiryDate')}
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
                    // value={LicenseData.get('FMembershipNo')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">
                      ملف العضوية
                    </label>
                    {/* {
                      agencyFFile ?
                        <label className="underline p-1 d-inline-block">{agencyFFile}</label>
                        :
                        ' '
                    } */}
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
                    // value={LicenseData.get('FCreateDate')}
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
                    // value={LicenseData.get('FExpiryDate')}
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
                    // value={LicenseData.get('TMembershipNo')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">
                      ملف العضوية
                    </label>
                    {/* {
                      agencyTFile ?
                        <label className="underline p-1 d-inline-block">{agencyTFile}</label>
                        :
                        ''
                    } */}
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
                    // value={LicenseData.get('TCreateDate')}
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
                    // value={LicenseData.get('TExpiryDate')}
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
                    // value={contactData.get('TelNo')}
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
                    // value={contactData.get('MobileNo')}
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
                    // value={contactData.get('FaxNo')}
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
                    // value={contactData.get('Email')}
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
                {/* {renderBrance} */}
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
      </Fragment>
    )
  }
}

export default AgencyPreviewData;

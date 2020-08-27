import React, { Component } from 'react';

class BasicInformation extends Component {
  render() {
    return (
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
                    name="Name"
                  // onChange={this.handleChange}
                  // value={this.props.agencyData.get('Name')}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group ">
                  <label className="d-block col-form-label"> الدولة</label>
                  <select
                    id="country"
                    name="Country"
                    className="form-control"
                  // value={this.props.agencyData.get('Country')}
                  // onChange={this.handleChange}
                  >
                    <option value="">Choose the Country</option>
                    {/* {countryname} */}
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
                  <select className="form-control" name="Classification"
                  // onChange={this.handleChange}
                  // value={this.props.agencyData.get('Classification')}
                  >
                    <option value="">Choose the Agency Classification</option>
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
                    name="Website"
                  // onChange={this.handleChange}
                  // value={this.props.agencyData.get('Website')}
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
                    name="RegisterNo"
                  // onChange={this.handleChange}
                  // value={this.props.agencyData.get('RegisterNo')}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group ">
                  <label className="d-block col-form-label">
                    إرفاق ملف السجل التجاري
                  </label>
                  <span className="form-control form-upload">
                    {/* {
                      regFile ?
                        <label>{regFile}</label>
                        : */}
                    <input
                      type="file"
                      name="RegistryFile"
                    // onChange={this.handlefiles}
                    />
                    {/* } */}
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
                  <input type="date" className="form-control" name="CreateDate"
                  // onChange={this.handleChange}
                  // value={agency.get('CreateDate')}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group ">
                  <label className="d-block col-form-label  ">
                    تاريخ انتهاء السجل التجاري
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="ExpiryDate"
                  // onChange={this.handleChange}
                  // value={agency.get('ExpiryDate')}
                  />
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
                    name="About"
                  // onChange={this.handleChange}
                  // value={agency.get('About')}
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
                <input
                  type="file"
                  id="upload-photo"
                  name="AgencyLogo"
                // onChange={this.handlelogo}
                />
              </div>
            </label>
            <span className="text-muted small"> صيغة jpg,png,svg </span>
          </div>
        </div>
      </section>
    )
  }
}

export default BasicInformation;

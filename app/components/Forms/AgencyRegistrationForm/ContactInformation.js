import React, { Component } from 'react';

class ContactInformation extends Component {
  render() {
    return (
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
                    type="text"
                    className="form-control form-mobile"
                    name="TelNo"
                  // onChange={this.handleChange}
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
                    type="text"
                    className="form-control"
                    name="MobileNo"
                  // onChange={this.handleChange}
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
                    type="text"
                    className="form-control"
                    name="FaxNo"
                  // onChange={this.handleChange}
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
                    className="form-control"
                    name="Email"
                  // onChange={this.handleChange}
                  // value={contactData.get('Email')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ContactInformation;

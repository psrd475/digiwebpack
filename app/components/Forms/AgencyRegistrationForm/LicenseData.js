import React, { Component } from 'react';
import data from 'API/licenseData';

class LicenseData extends Component {
  render() {
    const JSX = data.map((item, index) => {
      return (
        <section key={index}>
          <h3 className="text-primary">{item.title}</h3>
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
                          required
                          name={item.name}
                          value="1"
                        // onChange={this.handleChange}
                        // defaultChecked={LicenseData.get('embassy_Available') == true ? "checked" : ''}
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
                          name={item.name}
                          value="0"
                        // onChange={this.handleChange}
                        // defaultChecked={LicenseData.get('embassy_Available') == false ? "checked" : ''}
                        />
                        <label className="custom-control-label" htmlFor="no1">لا</label>
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
                      name={item.registartion_no}
                    // onChange={this.handleDataChange}
                    // readOnly={!ea}
                    // value={LicenseData.get('LicenceNo')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">
                      ملف الترخيص
                  </label>
                    <span className="form-control form-upload">
                      {/* {
                      agencyLicenceFile
                        ?
                        <label>{agencyLicenceFile}</label>
                        : */}
                      <input type="file"
                        name={item.registartion_file}
                      // onChange={this.handleFiles}
                      // disabled={!ea}
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
                      تاريخ انشاء الترخيص
                  </label>
                    <input type="date"
                      className="form-control"
                      name={item.create_date}
                    // onChange={this.handleDataChange}
                    // readOnly={!ea}
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
                      type="date"
                      className="form-control"
                      name={item.expiry_date}
                    // onChange={this.handleDataChange}
                    // readOnly={!ea}
                    // value={LicenseData.get('LicenceExpiryDate')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {index !== data.length - 1 &&
            <hr className="my-4" />
          }
        </section>
      )
    });

    return JSX;
  }
}

export default LicenseData;

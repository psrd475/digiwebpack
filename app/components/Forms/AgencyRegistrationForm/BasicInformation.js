import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import countryData from 'API/country';
import { setAgencyData } from 'Actions';

class BasicInformation extends Component {
  componentDidMount = () => {
    const _that = this;

    $('#create-date').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      autoApply: true,
      maxDate: new Date(),
      minYear: new Date().getFullYear() - 10,
      maxYear: new Date().getFullYear(),
      locale: {
        format: 'YYYY-MM-DD'
      }
    },
      function (start) {
        _that.props.setAgencyData({ commercial_registration_date: start.format('YYYY-MM-DD') })
      }
    );

    $('#end-date').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      autoApply: true,
      minDate: new Date(),
      minYear: new Date().getFullYear(),
      maxYear: new Date().getFullYear() + 10,
      locale: {
        format: 'YYYY-MM-DD'
      }
    },
      function (start) {
        _that.props.setAgencyData({ commercial_registration_expiry_date: start.format('YYYY-MM-DD') })
      }
    );
  }

  handleChange = (e) => {
    this.props.setAgencyData({ [e.target.name]: e.target.value });
  }

  handleFileChange = (e) => {
    if (e.target.files && e.target.files[0])
      this.props.setAgencyData({ [e.target.name]: e.target.files[0] });
  }

  handleDateChange = () => {
    return true;
  }

  render() {
    const { agencyData } = this.props;

    const countryOptions = countryData.map((item, index) => (
      <option key={index} value={item.name}>{item.name}</option>
    ));

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
                    name="agency_name"
                    placeholder="Agency Name"
                    value={agencyData.get('agency_name')}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group ">
                  <label className="d-block col-form-label"> الدولة</label>
                  <select
                    name="country"
                    className="form-control"
                    value={agencyData.get('country')}
                    onChange={this.handleChange}
                  >
                    <option value="">Choose the Country</option>
                    {countryOptions}
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
                  <select
                    name="category"
                    className="form-control"
                    value={agencyData.get('category')}
                    onChange={this.handleChange}
                  >
                    <option value="">Choose the Agency Classification</option>
                    <option value="Travel and tourism company">Travel and tourism company</option>
                    <option value="Transportation and delivery company">Transportation and delivery company</option>
                    <option value="Company x">Company x</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group ">
                  <label className="d-block col-form-label">
                    الموقع الالكتروني - اختياري
                  </label>
                  <input
                    name="website"
                    type="url"
                    className="form-control"
                    placeholder="www.example.com"
                    value={agencyData.get('website')}
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
                    name="commercial_registration_no"
                    type="text"
                    placeholder="Commercial Registration No"
                    className="form-control"
                    value={agencyData.get('commercial_registration_no')}
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
                    <label htmlFor="commercial_registration_file">
                      {agencyData.get('commercial_registration_file') !== null ? agencyData.get('commercial_registration_file').name : 'Choose File'}
                    </label>
                    <input
                      id='commercial_registration_file'
                      name="commercial_registration_file"
                      type="file"
                      accept=".pdf"
                      onChange={this.handleFileChange}
                      style={{ display: 'none' }}
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
                    تاريخ انشاء السجل التجاري
                  </label>
                  <input
                    id="create-date"
                    name="commercial_registration_date"
                    type="text"
                    autoComplete="off"
                    placeholder="Create Date"
                    className="form-control form-date"
                    value={agencyData.get('commercial_registration_date')}
                    onChange={this.handleDateChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group ">
                  <label className="d-block col-form-label  ">
                    تاريخ انتهاء السجل التجاري
                  </label>
                  <input
                    id="end-date"
                    name="commercial_registration_expiry_date"
                    type="text"
                    autoComplete="off"
                    placeholder="Expiry Date"
                    className="form-control form-date"
                    value={agencyData.get('commercial_registration_expiry_date')}
                    onChange={this.handleDateChange}
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
                    name="agency_description"
                    className="form-control"
                    rows={4}
                    placeholder="Agency Description"
                    value={agencyData.get('agency_description')}
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
              <p>{agencyData.get('agency_logo') !== null ? agencyData.get('agency_logo').name : 'Choose Logo'}</p>
              <div className="file-input-mask">
                <input
                  id="upload-photo"
                  name="agency_logo"
                  type="file"
                  accept="image/*"
                  onChange={this.handleFileChange}
                  style={{ display: 'none' }}
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

BasicInformation.propTypes = {
  setAgencyData: PropTypes.func.isRequired,
  agencyData: PropTypes.object.isRequired
};

const reducer = 'agency';

const mapStateToProps = state => ({
  agencyData: state.get(reducer)
});

const mapDispatchToProps = dispatch => ({
  setAgencyData: bindActionCreators(setAgencyData, dispatch)
});

const BasicInformationMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInformation);

export default BasicInformationMapped;

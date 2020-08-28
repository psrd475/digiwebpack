import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAgencyData } from 'Actions';
import data from 'API/licenseData';

class LicenseData extends Component {
  handleChange = (e) => {
    this.props.setAgencyData({ [e.target.name]: e.target.value });
  }

  handleFileChange = (e) => {
    if (e.target.files && e.target.files[0])
      this.props.setAgencyData({ [e.target.name]: e.target.files[0] });
  }

  handleRadioChange = (e) => {
    console.log(e);
    this.props.setAgencyData({ [e.target.name]: e.target.value === '0' ? false : true });
  }

  handleDateChange = () => {
    return true;
  }

  componentDidMount = () => {
    const _that = this;

    // $(function () {
    //   $('.create-date').daterangepicker({
    //     singleDatePicker: true,
    //     showDropdowns: true,
    //     autoApply: true,
    //     minYear: 2010,
    //     maxYear: parseInt(moment().format('YYYY'), 10),
    //     locale: {
    //       format: 'YYYY-MM-DD'
    //     }
    //   },
    //     function (start) {
    //       _that.props.setAgencyData({ create_date: (start.format('YYYY-MM-DD')) })

    //     }
    //   );
    // })

    // $(function () {
    //   $('.end-date').daterangepicker({
    //     singleDatePicker: true,
    //     showDropdowns: true,
    //     autoApply: true,
    //     minYear: 2020,
    //     maxYear: 2030,
    //     locale: {
    //       format: 'YYYY-MM-DD'
    //     }
    //   },
    //     function (start) {
    //       _that.props.setAgencyData({ commercial_registration_expiry_date: start.format('YYYY-MM-DD') })
    //     }
    //   );
    // });
  }

  render() {
    const { agencyData } = this.props;

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
                          id="hello"
                          name={item.name}
                          type="radio"
                          className="custom-control-input"
                          value="1"
                          // defaultChecked={agencyData.get(item.name)}
                          onChange={this.handleRadioChange}
                        />
                        <label className="custom-control-label" htmlFor="hello">
                          نعم
                        </label>
                      </div>
                      <div className="custom-control custom-radio  d-inline-block  mx-3">
                        <input
                          // id={item.name}
                          name={item.name}
                          type="radio"
                          className="custom-control-input"
                          value="0"
                          // defaultChecked={!agencyData.get(item.name)}
                          onChange={this.handleRadioChange}
                        />
                        <label className="custom-control-label" htmlFor={item.name}>لا</label>
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
                    <input
                      name={item.registartion_no}
                      type="text"
                      className="form-control"
                      readOnly={!agencyData.get(item.name)}
                      value={agencyData.get(item.registartion_no)}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">
                      ملف الترخيص
                    </label>
                    <span className="form-control form-upload">
                      <input
                        name={item.registartion_file}
                        type="file"
                        disabled={!agencyData.get(item.name)}
                        onChange={this.handleFileChange}
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
                    <input
                      name={item.create_date}
                      type="text"
                      className="form-control form-date"
                      readOnly={!agencyData.get(item.name)}
                      value={agencyData.get(item.create_date)}
                      onChange={this.handleDateChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label  ">
                      تاريخ انتهاء الترخيص
                    </label>
                    <input
                      name={item.expiry_date}
                      type="text"
                      className="form-control form-date"
                      readOnly={!agencyData.get(item.name)}
                      value={agencyData.get(item.expiry_date)}
                      onChange={this.handleDateChange}
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

LicenseData.propTypes = {
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

const LicenseDataMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(LicenseData);


export default LicenseDataMapped;

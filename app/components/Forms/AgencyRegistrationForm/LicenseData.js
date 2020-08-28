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
    this.props.setAgencyData({ [e.target.name]: e.target.value === '0' ? false : true });
  }

  handleDateChange = () => {
    return true;
  }

  componentDidMount = () => {
    const _that = this;

    for (let item of data) {
      $(`#create_date_${item.name}`).daterangepicker({
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
          _that.props.setAgencyData({ [item.create_date]: (start.format('YYYY-MM-DD')) })
        }
      );

      $(`#end_date_${item.name}`).daterangepicker({
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
          _that.props.setAgencyData({ [item.expiry_date]: start.format('YYYY-MM-DD') })
        }
      );
    }
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
                      {item.subtitle}
                    </label>
                    <div className="mt-2">
                      <div className="custom-control custom-radio  d-inline-block ">
                        <input
                          id={`yes_${item.name}`}
                          name={item.name}
                          type="radio"
                          className="custom-control-input"
                          value="1"
                          defaultChecked={agencyData.get(item.name)}
                          onChange={this.handleRadioChange}
                        />
                        <label className="custom-control-label" htmlFor={`yes_${item.name}`}>Yeah</label>
                      </div>
                      <div className="custom-control custom-radio  d-inline-block  mx-3">
                        <input
                          id={`no_${item.name}`}
                          name={item.name}
                          type="radio"
                          className="custom-control-input"
                          value="0"
                          defaultChecked={!agencyData.get(item.name)}
                          onChange={this.handleRadioChange}
                        />
                        <label className="custom-control-label" htmlFor={`no_${item.name}`}>No</label>
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
                      <label htmlFor={item.registartion_file}>
                        {agencyData.get(item.registartion_file) !== null ? agencyData.get(item.registartion_file).name : 'Choose File'}
                      </label>
                      <input
                        id={item.registartion_file}
                        name={item.registartion_file}
                        type="file"
                        accept=".pdf"
                        disabled={!agencyData.get(item.name)}
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
                      تاريخ انشاء الترخيص
                  </label>
                    <input
                      id={`create_date_${item.name}`}
                      name={item.create_date}
                      type="text"
                      autoComplete="off"
                      placeholder="Create Date"
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
                      id={`end_date_${item.name}`}
                      name={item.expiry_date}
                      type="text"
                      autoComplete="off"
                      placeholder="Expiry Date"
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

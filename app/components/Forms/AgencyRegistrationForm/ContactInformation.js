import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAgencyData } from 'Actions';

class ContactInformation extends Component {
  handleChange = (e) => {
    this.props.setAgencyData({ [e.target.name]: e.target.value });
  }

  render() {
    const { agencyData } = this.props
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
                    name="telephone_number"
                    type="text"
                    className="form-control form-mobile"
                    placeholder="Telephone Number"
                    value={agencyData.get('telephone_number')}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group ">
                  <label className="d-block col-form-label">
                    رقم الجوال
                  </label>
                  <input
                    name="phone_number"
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    value={agencyData.get('phone_number')}
                    onChange={this.handleChange}
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
                    name="fax_number"
                    type="text"
                    className="form-control"
                    placeholder="Fax Number"
                    value={agencyData.get('fax_number')}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group ">
                  <label className="d-block col-form-label">
                    البريد الالكتروني
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={agencyData.get('email')}
                    onChange={this.handleChange}
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

ContactInformation.propTypes = {
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

const ContactInformationMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactInformation);

export default ContactInformationMapped;

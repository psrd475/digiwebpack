import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAgencyData } from 'Actions';
import data from 'API/licenseData';

class AgencyPreviewData extends Component {
  renderAgencyLogo = () => {
    const { agencyData } = this.props;

    if (agencyData.get('agency_logo') && agencyData.get('agency_logo').type.includes('image')) {
      const reader = new FileReader();

      reader.onload = function (e) {
        $('#preview')
          .attr('src', e.target.result)
      };

      reader.readAsDataURL(agencyData.get('agency_logo'));
    };
  }

  componentDidMount() {
    this.renderAgencyLogo();
  }

  render() {
    const { agencyData } = this.props;

    const agency_owners = agencyData.get('agency_owners');
    const agency_branches = agencyData.get('agency_branches');

    const branchList = agency_branches.map((item, index) => (
      <tr key={index}>
        <td>{item.branch_name}</td>
        <td>{item.branch_city}</td>
        <td>{item.branch_street}</td>
        <td>{item.branch_building}</td>
        <td>{item.branch_longtitude}, {item.branch_latitude}</td>
        <td>{item.branch_phone_number}</td>
      </tr>
    ));

    const ownerList = agency_owners.map((item, index) => (
      <tr key={index}>
        <td>{item.owner_name}</td>
        <td>{item.owner_id}</td>
        <td>{item.owner_phone_number}</td>
      </tr>
    ));

    const licensePreview = data.map((item, index) => (
      <section key={index}>
        <h3 className="text-primary">
          {item.title}
        </h3>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group ">
                  <label className="d-block col-form-label">
                    License/Membership Number
                  </label>
                  <input
                    name={item.registartion_no}
                    type="text"
                    className="form-control-plaintext"
                    readOnly
                    value={agencyData.get(item.registartion_no)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group ">
                  <label className="d-block col-form-label">
                    License/Membership File
                  </label>
                  {agencyData.get(item.registartion_file) !== null ? agencyData.get(item.registartion_file).name : ''}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group ">
                  <label className="d-block col-form-label  ">
                    License/Membership Create Date
                  </label>
                  <input
                    name={item.create_date}
                    type="text"
                    className="form-control-plaintext"
                    readOnly
                    value={agencyData.get(item.create_date)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group ">
                  <label className="d-block col-form-label  ">
                    License/Membership Expiry Date
                  </label>
                  <input
                    name={item.expiry_date}
                    type="text"
                    className="form-control-plaintext"
                    readOnly
                    value={agencyData.get(item.expiry_date)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 mx-n4" />
      </section>
    ));

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
                      name="agency_name"
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      value={agencyData.get('agency_name')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> الدولة </label>
                    <input
                      name="country"
                      type="text"
                      readOnly
                      className="form-control-plaintext"
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
                      name="category"
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      value={agencyData.get('category')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">
                      الموقع الالكتروني
                    </label>
                    <input
                      name="website"
                      type="text"
                      readOnly
                      className="form-control-plaintext"
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
                      name="commercial_registration_no"
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      value={agencyData.get('commercial_registration_no')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">
                      ارفاق ملف السجل التجاري
                    </label>
                    {agencyData.get('commercial_registration_no') !== null ? agencyData.get('commercial_registration_no').name : ''}
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
                      name="commercial_registration_date"
                      type="text"
                      className="form-control-plaintext"
                      readOnly
                      value={agencyData.get('commercial_registration_date')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label  ">
                      تاريخ انتهاء السجل التجاري
                    </label>
                    <input
                      name="commercial_registration_expiry_date"
                      type="text"
                      className="form-control-plaintext"
                      readOnly
                      value={agencyData.get('commercial_registration_expiry_date')}
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
                      name="agency_description"
                      className="form-control-plaintext"
                      rows={4}
                      readOnly
                      value={agencyData.get('agency_description')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-5 offset-lg-1">
              <div className="bg-white border flag-info overflow-hidden py-5 round">
                <span className="p-4 d-block">
                  <img
                    id="preview"
                    src="/images/company-logo.jpg"
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
                {ownerList}
              </tbody>
            </table>
          </div>
        </section>
        <hr className="my-4 mx-n4" />
        {licensePreview}
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
                      type="number"
                      className="form-control-plaintext"
                      readOnly
                      value={agencyData.get('telephone_number')}
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
                      className="form-control-plaintext"
                      readOnly
                      value={agencyData.get('phone_number')}
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
                      className="form-control-plaintext"
                      readOnly
                      value={agencyData.get('fax_number')}
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
                      className="form-control-plaintext"
                      readOnly
                      value={agencyData.get('email')}
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
                {branchList}
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
      </Fragment >
    )
  }
}

AgencyPreviewData.propTypes = {
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

const AgencyPreviewDataMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencyPreviewData);

export default AgencyPreviewDataMapped;

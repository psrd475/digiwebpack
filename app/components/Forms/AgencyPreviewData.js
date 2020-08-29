import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAgencyData } from 'Actions';
import data from 'API/licenseData';

class AgencyPreviewData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Editmode: false
    }
  }

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

    const _that = this;

    $('#date').daterangepicker({
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

    $('#expiry-date').daterangepicker({
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

  handleDateChange = () => {
    return true;
  }

  handleFileChange = (e) => {
    if (e.target.files && e.target.files[0])
      this.props.setAgencyData({ [e.target.name]: e.target.files[0] });
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
        <td>
          <a
            href="#"
            className="table-action text-success"
            data-toggle="modal"
            data-target="#addbranch"
            onClick={() => this.props.handleBranchEdit(index)}
          >
            <i className="fal fa-fw fa-pencil-alt"></i>
          </a>
        </td>
        <td>
          <a href="#"
            className="table-action text-danger"
            data-toggle="modal"
            data-target="#deleteitem"
            onClick={() => this.props.confirmDelete('agency_branches', index)}
          >
            <i className="fal fa-fw fa-trash-alt"></i>
          </a>
        </td>
      </tr>
    ));

    const ownerList = agency_owners.map((item, index) => (
      <tr key={index}>
        <td>{item.owner_name}</td>
        <td>{item.owner_id}</td>
        <td>{item.owner_phone_number}</td>
        <td>
          <a
            href="#"
            className="table-action text-success"
            data-toggle="modal"
            data-target="#addowner"
            onClick={() => this.props.handleOwnerEdit(index)}
          >
            <i className="fal fa-fw fa-pencil-alt"></i>
          </a>
        </td>
        <td>
          <a href="#"
            className="table-action text-danger"
            data-toggle="modal"
            data-target="#deleteitem"
            onClick={() => this.props.confirmDelete('agency_owners', index)}
          >
            <i className="fal fa-fw fa-trash-alt"></i>
          </a>
        </td>
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
                  {/* {agencyData.get(item.registartion_file) !== null ? agencyData.get(item.registartion_file).name : ''} */}
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
                    License/Membership Expiry Date
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
                    {/* {agencyData.get('commercial_registration_no') !== null ? agencyData.get('commercial_registration_no').name : ''} */}
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
                      id="date"
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
                      id="expiry-date"
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
                  <th>The Owner's Name</th>
                  <th>ID Number</th>
                  <th>Mobile number</th>
                  <th>Modification</th>
                  <th>Delete</th>
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
                  <th>Branch Name</th>
                  <th>City</th>
                  <th>The Street</th>
                  <th>Building Number/Name</th>
                  <th>Coordinates</th>
                  <th>Cell Phone</th>
                  <th>Modification</th>
                  <th>Delete</th>
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

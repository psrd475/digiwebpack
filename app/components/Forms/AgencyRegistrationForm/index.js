import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { setAgencyData } from 'Actions';
import BasicInformation from './BasicInformation';
import OwnerInformation from './OwnerInformation';
import LicenseData from './LicenseData';
import BranchInformation from './BranchInformation';
import ContactInformation from './ContactInformation';
import AgencyPreviewData from '../AgencyPreviewData';
import ConfirmBox from '../../DialogBox/ConfirmBox';
import CreateOwner from '../../DialogBox/CreateOwner';
import CreateBranch from '../../DialogBox/CreateBranch';

class AgencyRegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 0,
      ownerEditMode: false,
      ownerEditableNode: -1,
      branchEditMode: false,
      branchEditableNode: -1,
      confirm: '',
      deleteIndex: -1,
      owner_id: '',
      owner_name: '',
      owner_phone_number: '',
      branch_name: '',
      branch_city: '',
      branch_street: '',
      branch_building: '',
      branch_phone_number: '',
      branch_longtitude: '',
      branch_latitude: '',
      privacy_policy: 'off',
      terms_conditions: 'off'
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOwnerReset = () => {
    this.setState({
      owner_id: '',
      owner_name: '',
      owner_phone_number: '',
      ownerEditMode: false,
      ownerEditableNode: -1
    });
  }

  handleBranchReset = () => {
    this.setState({
      branch_name: '',
      branch_city: '',
      branch_street: '',
      branch_building: '',
      branch_phone_number: '',
      branch_longtitude: '',
      branch_latitude: '',
      branchEditMode: false,
      branchEditableNode: -1
    });
  }

  handleOwnerEdit = (index) => {
    const owner = this.props.agencyData.getIn(['agency_owners', index]);
    this.setState({ ...owner, ownerEditMode: true, ownerEditableNode: index });
  }

  handleBranchEdit = (index) => {
    const branch = this.props.agencyData.getIn(['agency_branches', index]);
    this.setState({ ...branch, branchEditMode: true, branchEditableNode: index });
  }

  confirmDelete = (variant, index) => {
    this.setState({ confirm: variant, deleteIndex: index });
  }

  handleDelete = (variant) => {
    const updatedData = this.props.agencyData.get(variant).delete(this.state.deleteIndex);
    this.props.setAgencyData({ [variant]: updatedData });
  }

  handleOwnerSubmit = () => {
    let agency_owners;

    const owner = {
      owner_id: this.state.owner_id,
      owner_name: this.state.owner_name,
      owner_phone_number: this.state.owner_phone_number
    };

    if (this.state.ownerEditMode) {
      agency_owners = this.props.agencyData.get('agency_owners').set(this.state.ownerEditableNode, owner);
    } else {
      agency_owners = this.props.agencyData.get('agency_owners').concat([owner]);
    };

    this.props.setAgencyData({ agency_owners });

    this.handleOwnerReset();
  }

  handleBranchSubmit = () => {
    let agency_branches;

    const branch = {
      branch_name: this.state.branch_name,
      branch_city: this.state.branch_city,
      branch_street: this.state.branch_street,
      branch_building: this.state.branch_building,
      branch_phone_number: this.state.branch_phone_number,
      branch_longtitude: this.state.branch_longtitude,
      branch_latitude: this.state.branch_latitude
    };

    if (this.state.branchEditMode) {
      agency_branches = this.props.agencyData.get('agency_branches').set(this.state.branchEditableNode, branch);
    } else {
      agency_branches = this.props.agencyData.get('agency_branches').concat([branch]);
    };

    this.props.setAgencyData({ agency_branches });

    this.handleBranchReset();
  }

  handleTab = (operation) => {
    if (operation) {
      this.setState(prevState => {
        return {
          tab: prevState.tab + 1
        }
      });
    } else {
      this.setState(prevState => {
        return {
          tab: prevState.tab - 1
        }
      });
    }
  }

  componentDidMount() {
    AOS.init();

    $('.dropdown-menu .form-group').click(function (e) {
      e.stopPropagation();
    });
  }

  render() {
    const { handleSubmit } = this.props;
    const { tab, owner_name, owner_id, owner_phone_number, confirm,
      branch_name, branch_city, branch_street, branch_building,
      branch_phone_number, branch_longtitude, branch_latitude,
      privacy_policy, terms_conditions
    } = this.state;

    return (
      <Fragment>
        {/* Modals */}
        <ConfirmBox
          variant={confirm}
          handleDelete={this.handleDelete}
        />

        <CreateOwner
          owner_id={owner_id}
          owner_name={owner_name}
          owner_phone_number={owner_phone_number}
          handleChange={this.handleChange}
          handleOwnerSubmit={this.handleOwnerSubmit}
          handleOwnerReset={this.handleOwnerReset}
        />

        <CreateBranch
          branch_name={branch_name}
          branch_city={branch_city}
          branch_street={branch_street}
          branch_building={branch_building}
          branch_phone_number={branch_phone_number}
          branch_longtitude={branch_longtitude}
          branch_latitude={branch_latitude}
          handleChange={this.handleChange}
          handleBranchSubmit={this.handleBranchSubmit}
          handleBranchReset={this.handleBranchReset}
        />

        <div className="page-layout">
          <div className="container ">
            <nav aria-label="breadcrumb">
              <ol className="bg-transparent breadcrumb mb-2 p-0 small text-muted">
                <li className="breadcrumb-item">
                  <a href="#">الرئيسية</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  تسجيل وكالة السفر
                </li>
              </ol>
            </nav>
            <div className="page-title">
              <h1 className="h1 text-primary"> تسجيل وكالة السفر </h1>
            </div>
            <div className="page-inner">
              <div className="border-bottom mb-4 mx-n4 px-4 pb-3">
                <div className="wizard-control">
                  <ul className="d-flex justify-content-center flex-column flex-md-row ">
                    <li className={`nav-item ${tab === 0 ? 'active' : ''}`}>
                      <div className="nav-link">
                        <span className="wizard-tabs-number">1</span>
                        <span className="wizard-tabs-title"> البيانات الاساسية </span>
                      </div>
                    </li>
                    <li className={`nav-item ${tab === 1 ? 'active' : ''}`}>
                      <div className="nav-link">
                        <span className="wizard-tabs-number">2</span>
                        <span className="wizard-tabs-title"> بيانات الترخيص </span>
                      </div>
                    </li>
                    <li className={`nav-item ${tab === 2 ? 'active' : ''}`}>
                      <div className="nav-link">
                        <span className="wizard-tabs-number">3</span>
                        <span className="wizard-tabs-title">
                          بيانات التواصل والفروع
                        </span>
                      </div>
                    </li>
                    <li className={`nav-item ${tab === 3 ? 'active' : ''}`}>
                      <div className="nav-link">
                        <span className="wizard-tabs-number">4</span>
                        <span className="wizard-tabs-title"> تأكيد البيانات </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="wizard-details">
                {/* Basic Information & Create Owner */}
                {tab === 0 &&
                  <Fragment>
                    <BasicInformation />
                    <OwnerInformation
                      handleOwnerEdit={this.handleOwnerEdit}
                      confirmDelete={this.confirmDelete}
                    />
                  </Fragment>
                }

                {/* License Data */}
                {tab === 1 &&
                  <LicenseData />
                }

                {/* Contact Information & Create Branch */}
                {tab === 2 &&
                  <Fragment>
                    <ContactInformation />
                    <BranchInformation
                      handleBranchEdit={this.handleBranchEdit}
                      confirmDelete={this.confirmDelete}
                    />
                  </Fragment>
                }

                {/* Agency Preview Data & Terms & Conditions */}
                {tab === 3 &&
                  <Fragment>
                    <AgencyPreviewData />
                    <section className="bg-light  mx-n4 p-4 px-4 mt-5">
                      <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                        <input
                          id="policy"
                          name="privacy_policy"
                          type="checkbox"
                          className="custom-control-input"
                          value={privacy_policy === 'on' ? 'off' : 'on'}
                          onChange={this.handleChange}
                        />
                        <label className="custom-control-label" htmlFor="policy">
                          اقر بمسوؤليتي عن صحة البيانات السابقة والتي تتوافق مع البيانات
                          المسجلة حكوميا
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mr-sm-2">
                        <input
                          id="terms"
                          name="terms_conditions"
                          type="checkbox"
                          className="custom-control-input"
                          value={terms_conditions === 'on' ? 'off' : 'on'}
                          onChange={this.handleChange}
                        />
                        <label className="custom-control-label" htmlFor="terms">
                          اقر بالموافقة على الشروط والاحكام الخاصة بتسجيل الوكالة بعد
                          قراءتها
                        </label>
                      </div>
                    </section>
                  </Fragment>
                }

                {/* Form Footer */}
                <div className="btn-group mt-5">
                  <Link to="/" className="btn btn-default px-0"> الغاء التسجيل </Link>
                  <div>
                    {tab !== 0 &&
                      <Link
                        to="#"
                        onClick={() => this.handleTab(0)}
                        className="btn btn-outline-primary ml-3"
                      >
                        السابق
                      </Link>
                    }
                    <Link
                      to="#"
                      onClick={() => tab !== 3 ? this.handleTab(1) : handleSubmit()}
                      className="btn btn-primary ml-3"
                    >
                      {tab !== 3 ? "Next" : "Emphasis"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment >
    )
  }
}

AgencyRegistrationForm.propTypes = {
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

const AgencyRegistrationFormMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencyRegistrationForm);

export default AgencyRegistrationFormMapped;

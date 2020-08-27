import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import BasicInformation from './BasicInformation';
import OwnerInformation from './OwnerInformation';
import BranchInformation from './BranchInformation';
import LicenseData from './LicenseData';
import AgencyPreviewData from '../AgencyPreviewData';
import ContactInformation from './ContactInformation';
import ConfirmBox from '../../DialogBox/ConfirmBox';
import CreateOwner from '../../DialogBox/CreateOwner';
import CreateBranch from '../../DialogBox/CreateBranch';

class AgencyRegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 0
    }
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
    const { tab } = this.state;

    return (
      <Fragment>
        {/* Modals */}
        <ConfirmBox />
        <CreateOwner />
        <CreateBranch />

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
                    <OwnerInformation />
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
                    <BranchInformation />
                  </Fragment>
                }

                {/* Agency Preview Data & Terms & Conditions */}
                {tab === 3 &&
                  <Fragment>
                    <AgencyPreviewData />
                    <section className="bg-light  mx-n4 p-4 px-4 mt-5">
                      <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                        <input type="checkbox" className="custom-control-input" id="xx" />
                        <label className="custom-control-label" htmlFor="xx">
                          اقر بمسوؤليتي عن صحة البيانات السابقة والتي تتوافق مع البيانات
                          المسجلة حكوميا
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="ss" />
                        <label className="custom-control-label" htmlFor="ss">
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
                      onClick={() => tab !== 3 ? this.handleTab(1) : true}
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

export default AgencyRegistrationForm;

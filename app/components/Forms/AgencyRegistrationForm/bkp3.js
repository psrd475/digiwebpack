import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { storeStep3Data } from 'Actions/AgencyRegAction';
class AgencyRegister3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branch_name: '',
      city: '',
      street: '',
      buildingNo: '',
      longtitude: '',
      latitude: '',
      phone_number: '',
    }
  }
  componentDidMount() {
    AOS.init();
    $('.dropdown-menu .form-group').click(function (e) {
      e.stopPropagation();
    });
    $(document).ready(function () {
      // for demo only  
      // $('.demo-trigger-1').one("click", function () {
      //   $('.demo-1').hide();
      //   $('.demo').show();
      // });
    });
    // switch language for demo
    var lan = document.querySelector('.toggle-lang');
    if (typeof (lan) != 'undefined' && lan != null) {
      lan.onchange = function () {
        var tag = document.querySelector('html');
        var tagdir = tag.dir;
        tagdir == 'ltr' ? tag.setAttribute('dir', 'rtl') : tag.setAttribute('dir', 'ltr');
      }
    }

    // Toggle mobile menu
    var nav = document.querySelector('.navbar-toggle');
    if (typeof (nav) != 'undefined' && nav != null) {
      nav.onclick = function () {
        var tabbody = document.querySelector('body');
        if (tabbody.classList.contains('nav-open')) {
          tabbody.classList.remove('nav-open');
        } else {
          tabbody.classList.add('nav-open');
        }
        // consol.log('working');
      }
    }
  }

  handleBranch = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    let temp = this.props.contactData.set(name, value);
    this.props.addInfo({ contactData: temp });
  }
  handleBranchSubmit = (e) => {
    const { branch_name, city, street, buildingNo, longtitude, latitude, phone_number } = this.state
    let addbranch = this.props.contactData.get('Branch').push({ branch_name, city, street, buildingNo, longtitude, latitude, phone_number });
    console.log(addbranch.toJS());
    let temp = this.props.contactData.set('Branch', addbranch);
    console.log(temp.toJS())
    this.props.addInfo({ contactData: temp });
  }
  render() {
    let contactData = this.props.contactData;
    console.log("contactData", contactData.toJS());

    const branchList = contactData.get('Branch').size;
    const { branch_name, city, street, buildingNo, longtitude, latitude, phone_number } = this.state
    const Branch = this.props.contactData.get('Branch');
    const branchData = Branch.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.branch_name}</td>
          <td>{item.city}</td>
          <td>{item.street}</td>
          <td>{item.buildingNo}</td>
          <td>{item.longtitude}, {item.latitude} </td>
          <td>{item.phone_number} </td>
          <td>
            <a
              href="#"
              className="table-action text-success"
              data-toggle="modal"
              data-target="#addbranch"
            >

              <i className="fal fa-fw fa-pencil-alt" />
            </a>
          </td>
          <td>
            <a
              href="#"
              className="table-action text-danger"
              data-toggle="modal"
              data-target="#deleteitem"
            >

              <i className="fal fa-fw fa-trash-alt" />
            </a>
          </td>
        </tr>
      )
    })
    return (
      <Fragment>
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
            <div className="page-inner overflow-hidden">
              <div className="border-bottom mb-4 mx-n4 px-4 pb-3">
                <div className="wizard-control">
                  <ul className="d-flex justify-content-center flex-column flex-md-row ">
                    <li className="nav-item ">
                      <div className="nav-link">
                        <span className="wizard-tabs-number">1</span>
                        <span className="wizard-tabs-title"> البيانات الاساسية </span>
                      </div>
                    </li>
                    <li className="nav-item ">
                      <div className="nav-link">
                        <span className="wizard-tabs-number">2</span>
                        <span className="wizard-tabs-title"> بيانات الترخيص </span>
                      </div>
                    </li>
                    <li className="nav-item active">
                      <div className="nav-link">
                        <span className="wizard-tabs-number">3</span>
                        <span className="wizard-tabs-title">

                          بيانات التواصل والفروع
                </span>
                      </div>
                    </li>
                    <li className="nav-item ">
                      <div className="nav-link">
                        <span className="wizard-tabs-number">4</span>
                        <span className="wizard-tabs-title"> تأكيد البيانات </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="wizard-details">

                <hr className="my-4" />

                <div className="btn-group mt-5">
                  <a href="login.html" className="btn btn-default px-0">

                    الغاء التسجيل
          </a>
                  <div>
                    <Link
                      to="#"
                      // href="Agency_Registeration_2.html"
                      onClick={this.props.goPrevious}
                      className="btn btn-outline-primary ml-3"
                    >
                      السابق
                    </Link>
                    <Link
                      to="#"
                      // href="Agency_Registeration_4.html"
                      onClick={this.props.goNext}
                      className="btn btn-primary ml-3"
                    >
                      التالي
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>

          <div
            className="modal fade"
            id="deleteitem"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">

                    هل انت متأكد من حذف هذا الفرع ؟
          </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="bg-light font-weight-bold p-3"> فرع الشهداء </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-2"
                    data-dismiss="modal"
                  >
                    إلغاء
          </button>
                  <button
                    type="button"
                    className="btn btn-danger "
                    data-dismiss="modal"
                  >
                    تأكيد الحذف
          </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

AgencyRegister3.propTypes = {
  addInfo: PropTypes.func.isRequired,
}
const redux = 'AgencyRegistration';

const mapStateToProps = state => ({
  contactData: state.getIn([redux, 'contactData'])
});

const mapDispatchToProps = dispatch => ({
  addInfo: bindActionCreators(storeStep3Data, dispatch)
});
const AgencyRegister3Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencyRegister3);
export default AgencyRegister3Mapped;

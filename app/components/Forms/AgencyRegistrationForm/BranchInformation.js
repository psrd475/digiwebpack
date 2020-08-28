import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAgencyData } from 'Actions';

class BranchInformation extends Component {
  render() {
    const { agencyData } = this.props;
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

    return (
      <section>
        <div className="d-flex justify-content-between align-items-center my-4">
          <h2 className="h3 text-primary m-0"> فروع وكالة السفر</h2>
          <a
            href="#"
            className="btn btn-outline-primary btn-hover"
            data-toggle="modal"
            data-target="#addbranch"
          >
            اضافة فرع
          </a>
        </div>
        <div
          className="demo-1 align-items-center bg-light border  display-4 flex-column justify-content-center mb-5 p-5 round text-center text-muted"
          style={{ display: agency_branches.size ? 'none' : '' }}
        >
          <i className="fal fa-fw fa-3x text-muted fa-building mb-4" />
          <p className="text-muted m-0">
            ليس لديك فروع حاليا ...
            <a
              href="#;"
              className="d-inline-block border-bottom"
              data-toggle="modal"
              data-target="#addbranch"
            >
              اضافة فرع جديد ؟
            </a>
          </p>
        </div>
        <div className="demo" style={{ display: agency_branches.size ? '' : 'none' }}>
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
        </div>
      </section>
    )
  }
}

BranchInformation.propTypes = {
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

const BranchInformationMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(BranchInformation);

export default BranchInformationMapped;

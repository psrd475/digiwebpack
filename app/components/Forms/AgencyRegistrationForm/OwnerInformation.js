import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAgencyData } from 'Actions';

class OwnerInformation extends Component {
  render() {
    const { agencyData } = this.props;
    const agency_owners = agencyData.get('agency_owners');

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

    return (
      <section>
        <div className="d-flex justify-content-between align-items-center my-4" >
          <h3 className="text-primary m-0">
            بيانات مالك / ملاك وكالة السفر
          </h3>
          <a
            href="#"
            className="btn btn-outline-primary btn-hover"
            data-toggle="modal"
            data-target="#addowner"
          >
            اضافة مالك
          </a>
        </div>
        <div
          className="demo-1 align-items-center bg-light border  display-4 flex-column justify-content-center mb-5 p-5 round text-center text-muted"
          style={{ display: agency_owners.size ? 'none' : '' }}
        >
          <i className="fal fa-fw fa-4x text-muted fa-users mb-4" />
          <p className="text-muted m-0">
            لا يوجد ملاك حاليا ...
            <a
              href="#"
              className="d-inline-block border-bottom"
              data-toggle="modal"
              data-target="#addowner"
            >
              اضافة مالك جديد ؟
            </a>
          </p>
        </div>
        <div
          className="demo"
          style={{ display: agency_owners.size ? '' : 'none' }}
        >
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
        </div>
      </section>
    )
  }
}

OwnerInformation.propTypes = {
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

const OwnerInformationMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(OwnerInformation);

export default OwnerInformationMapped;

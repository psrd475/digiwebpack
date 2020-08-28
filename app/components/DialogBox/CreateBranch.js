import React, { Component } from 'react';

class CreateBranch extends Component {
  render() {
    const {
      branch_name, branch_city, branch_street, branch_building, branch_phone_number, branch_longtitude,
      branch_latitude, handleChange, handleBranchSubmit, handleBranchReset
    } = this.props;

    return (
      <div
        className="modal fade"
        id="addbranch"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                إضافة فرع
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
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">Branch Name</label>
                    <input
                      name="branch_name"
                      type="text"
                      className="form-control"
                      placeholder="Branch Name"
                      value={branch_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">City</label>
                    <select
                      name="branch_city"
                      className="form-control"
                      value={branch_city}
                      onChange={handleChange}
                    >
                      <option value="">Choose the Branch City </option>
                      <option value='Indore'>Indore</option>
                      <option value='Rewa'>Rewa</option>
                      <option value='Bhopal'>Bhopal</option>
                      <option value='Dewas'>Dewas</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">Street</label>
                    <input
                      name="branch_street"
                      type="text"
                      className="form-control"
                      placeholder="Street No"
                      value={branch_street}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">
                      Building Number/Name
                    </label>
                    <input
                      name="branch_building"
                      type="text"
                      className="form-control"
                      placeholder="Building Number/Name"
                      value={branch_building}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">Coordinates</label>
                    <div className="input-group">
                      <input
                        name="branch_longtitude"
                        type="text"
                        className="form-control"
                        placeholder="Longtitude"
                        value={branch_longtitude}
                        onChange={handleChange}
                      />
                      <input
                        name="branch_latitude"
                        type="text"
                        className="form-control"
                        placeholder="Latitude"
                        value={branch_latitude}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">Phone Number</label>
                    <input
                      name="branch_phone_number"
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      value={branch_phone_number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary mr-2"
                data-dismiss="modal"
                onClick={handleBranchReset}
              >
                إلغاء
              </button>
              <button
                type="button"
                className="btn btn-primary  btn-hover demo-trigger-1"
                data-dismiss="modal"
                onClick={handleBranchSubmit}
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateBranch;

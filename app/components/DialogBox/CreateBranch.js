import React, { Component } from 'react';

class CreateBranch extends Component {
  render() {
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
                    <label className="d-block col-form-label"> اسم الفرع</label>
                    <input
                      type="text"
                      className="form-control"
                      name="branch_name"
                    // onChange={this.handleBranch} 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> المدينة </label>
                    <select
                      className="form-control"
                      name="city"
                    // onChange={this.handleBranch}
                    >
                      <option value=" "> Choose the Branch City </option>
                      <option value='Indore'>Indore</option>
                      <option value='Reva'>Reva</option>
                      <option value='Bhopal'>Bhopal</option>
                      <option value='Dewas'>Dewas</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> الشارع </label>
                    <input
                      type="text"
                      className="form-control"
                      name="street"
                    // onChange={this.handleBranch}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label">
                      رقم / اسم المبنى
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="buildingNo"
                    // onChange={this.handleBranch} 
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> الاحداثيات </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="longtitude"
                        name="longtitude"
                      // onChange={this.handleBranch}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="latitude"
                        name="latitude"
                      // onChange={this.handleBranch}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> الجوال </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone_number"
                    // onChange={this.handleBranch}
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
              >
                إلغاء
              </button>
              <button
                type="button"
                className="btn btn-primary  btn-hover demo-trigger-1"
                data-dismiss="modal"
              // onClick={this.handleBranchSubmit}
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

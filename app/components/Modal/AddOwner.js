import React, { Component, Fragment } from 'react';

class AddOwner extends Component {
  render() {
    return (
      <Fragment>
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

                  إضافة مالك
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
                      <label className="d-block col-form-label"> اسم المالك </label>
                      <input type="text" className="form-control" name="owner_name" onChange={this.handleOwner} value={this.state.owner_name} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="d-block col-form-label"> رقم الهوية </label>
                      <input type="text" className="form-control" name="owner_id" onChange={this.handleOwner} value={this.state.owner_id} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="d-block col-form-label"> رقم الجوال </label>
                      <input type="text" className="form-control" name="phone_number" onChange={this.handleOwner} value={this.state.phone_number} />
                    </div>
                  </div>
                </div>
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
                  className="btn btn-primary demo-trigger-1"
                  data-dismiss="modal"
                  onClick={this.handleOwnerSubmit}
                >
                  حفظ
                  </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default AddOwner;
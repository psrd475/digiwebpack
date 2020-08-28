import React, { Component } from 'react';

class CreateOwner extends Component {
  render() {
    const {
      owner_name, owner_id, owner_phone_number, handleChange, handleOwnerSubmit, handleOwnerReset
    } = this.props;

    return (
      <div
        className="modal fade"
        id="addowner"
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
                    <input
                      name="owner_name"
                      type="text"
                      className="form-control"
                      value={owner_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> رقم الهوية </label>
                    <input
                      name="owner_id"
                      type="text"
                      className="form-control"
                      value={owner_id}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> رقم الجوال </label>
                    <input
                      name="owner_phone_number"
                      type="text"
                      className="form-control"
                      value={owner_phone_number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                data-dismiss="modal"
                onClick={handleOwnerReset}
              >
                إلغاء
              </button>
              <button
                type="button"
                className="btn btn-primary demo-trigger-1"
                data-dismiss="modal"
                onClick={handleOwnerSubmit}
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

export default CreateOwner;

import React, { Component } from 'react';

class ConfirmBox extends Component {
  render() {
    return (
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
                Are you sure to delete this ?
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
            {/* <div className="modal-body">
              <p className="bg-light font-weight-bold p-3">
                confirm data here
              </p>
            </div> */}
            <div className="modal-footer" style={{ justifyContent: 'center' }}>
              <button
                type="button"
                className="btn btn-outline-secondary mr-2"
                data-dismiss="modal"
              >
                إلغاء
              </button>
              <button
                type="button"
                className="btn btn-danger "
                data-dismiss="modal"
                onClick={() => this.props.handleDelete(this.props.variant)}
              >
                تأكيد الحذف
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ConfirmBox;

import React, { Component } from 'react';

class OwnerInformation extends Component {
  render() {
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
          className="demo-1 align-items-center bg-light border  display-4 flex-column justify-content-center mb-5 p-5 round text-center text-muted">
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
          style={{ display: 'none' }}
        >
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>اسم المالك</th>
                  <th>رقم الهوية</th>
                  <th> رقم الجوال</th>
                  <th>تعديل</th>
                  <th>حذف</th>
                </tr>
              </thead>
              <tbody>
                {/* {ownerData} */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}

export default OwnerInformation;

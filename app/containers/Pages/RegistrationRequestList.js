import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getData } from 'Helpers/request';
import countryData from 'API/country';
import categoryData from 'API/category';

class RegistrationRequestList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataCurrent: [],
      dataPrevious: []
    }
  }

  componentDidMount() {
    AOS.init();

    $('.dropdown-menu .form-group').click(function (e) {
      e.stopPropagation();
    });

    getData(`${API_URL}/agency/agency-registrations-request`)
      .then((res) => {
        console.log(res);
        if (res.status === 1) {
          this.setState({ data: res.data })
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  request = (item, index) => {
    <tr key={index}>
      <td scope="row">{item.id}</td>
      <td>{item.agency_name}</td>
      <td>{item.created_at}</td>
      <td>{item.country}</td>
      <td>{item.agency_category}</td>
      <td>
        <span className="badge badge-info">new</span>
      </td>
      <td className="text-center">
        <Link
          // href="view_request.html"
          className="view-action"
          title="View item"
        >
          <i className="fal fa-eye fa-fw fa-1x" />
          <span className="d-none">View item</span>
        </Link>
      </td>
    </tr>
  }

  render() {
    const { dataCurrent, dataPrevious } = this.state;

    const countryOptions = countryData.map((item, index) => (
      <option key={index} value={item.name}>{item.name}</option>
    ));

    const categoryOptions = categoryData.map((item, index) => (
      <option key={index} value={item.category}>{item.category}</option>
    ))

    const currentRequests = dataCurrent.map((item, index) => {
      return (
        request(item, index)
      )
    })

    const previousRequests = dataPrevious.map((item, index) => {
      return (
        request(item, index)
      )
    })

    return (
      <div>
        <div className="page-layout">
          <div className="container ">
            <nav aria-label="breadcrumb">
              <ol className="bg-transparent breadcrumb mb-2 p-0 small text-muted">
                <li className="breadcrumb-item">
                  <Link to="#">الرئيسية</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  طلبات تسجيل وكالات الاسفار
                </li>
              </ol>
            </nav>
            <div className="page-title">
              <h1 className="h1 text-primary">
                طلبات تسجيل وكالات الاسفار
                 <a
                  className="mx-2"
                  data-toggle="collapse"
                  href="#advSearch"
                  role="button"
                  aria-expanded="false"
                  aria-controls="advSearch"
                >
                  <i className="fal fa-fw  search-icon fa-search" />
                </a>
              </h1>
            </div>
            <div className="adv-search collapse border p-4 mb-4" id="advSearch">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="form-group">
                    <label className="d-block col-form-label"> رقم الطلب </label>
                    <input
                      type="number"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> اسم وكالة السفر </label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> الدولة </label>
                    <select
                      id="country"
                      name="country"
                      className="form-control"
                    >
                      <option value="">Choose the Country</option>
                      {countryOptions}
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> تصنيف الوكالة </label>
                    <select className="form-control">
                      <option value="">Choose the Agency Classification</option>
                      {categoryOptions}
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="form-group ">
                    <label className="d-block col-form-label"> حالة الطلب </label>
                    <select className="form-control">
                      <option value>كل الطلبات</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-right">
                <a className="btn btn-block-mobile btn-primary">
                  بحـــث
                </a>
              </div>
            </div>
            <div className="page-inner">
              <div className="mt-n4">
                <ul
                  className="nav nav-tabs border-bottom f-tabs mb-4  mx-n4 nav nav-tabs pb-1 sticky-top"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="current-tab"
                      data-toggle="tab"
                      href="#current"
                      role="tab"
                      aria-controls="current"
                      aria-selected="true"
                    >
                      الطلبات الحالية
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="prev-tab"
                      data-toggle="tab"
                      href="#prev"
                      role="tab"
                      aria-controls="prev"
                      aria-selected="false"
                    >
                      الطلبات السابقة
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane   show active"
                  id="current"
                  role="tabpanel"
                  aria-labelledby="current-tab"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered table-light table-striped">
                      <thead>
                        <tr>
                          <th scope="col">رقم الطلب</th>
                          <th scope="col">اسم وكالة السفر</th>
                          <th scope="col">تاريخ الانشاء</th>
                          <th scope="col">الدولة</th>
                          <th scope="col">تصنيف الوكالة</th>
                          <th scope="col">حالة الطلب</th>
                          <th scope="col" width="5%" className="text-center">
                            عرض
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentRequests}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane  "
                  id="prev"
                  role="tabpanel"
                  aria-labelledby="prev-tab"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered table-light table-striped">
                      <thead>
                        <tr>
                          <th scope="col">رقم الطلب</th>
                          <th scope="col">اسم وكالة السفر</th>
                          <th scope="col">تاريخ الانشاء</th>
                          <th scope="col">الدولة</th>
                          <th scope="col">تصنيف الوكالة</th>
                          <th scope="col">حالة الطلب</th>
                          <th scope="col" width="5%" className="text-center">
                            عرض
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {previousRequests}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationRequestList;
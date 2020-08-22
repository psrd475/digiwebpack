import React, { Component, Fragment } from 'react';

class UmrahSearch extends Component {
  componentDidMount() {
    AOS.init();
    $('.dropdown-menu .form-group').click(function (e) {
      e.stopPropagation();
    });
    // $('.form-date').daterangepicker();
  }
  render() {
    return (
      <Fragment>
        < section className="home-banner pb-4" >
          <div
            className="container py-0 py-lg-5 my-3 my-lg-5"
            data-aos="fade-right"
            data-aos-offset={100}
            data-aos-duration={1000}
            data-aos-delay={100}
          >
            <div className="search_box p-4 shadow bg-white my-0 my-md-4">
              <h2 className="section-title"> Here start the Umrah</h2>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="" className="d-block">

                    Program Path
          </label>
                  <select className="form-control">
                    <option> Makkah and madina </option>
                    <option> Makkah Only </option>
                  </select>
                </div>
                <div className="col-md-6  form-group">
                  <label htmlFor="" className="d-block">

                    Program dates
                  </label>
                  <input type="text" className="form-control form-date" readOnly />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="" className="d-block">

                    Travel from
                  </label>
                  <select name="" id="" className="form-control">
                    <optgroup label="مطارات مصر">
                      <option value={1}> CAI</option>
                      <option value={2}>مطار برج العرب</option>
                      <option value={3}>مطار شرم الشيخ</option>
                    </optgroup>
                    <optgroup label="مطارات تونس">
                      <option value={4}>مطار عنابة </option>
                      <option value={5}>مطار تونس</option>
                      <option value={6}>مطار قرطاج</option>
                    </optgroup>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="" className="d-block">

                    Program type
                  </label>
                  <select className="form-control">
                    <option> Economy </option>
                    <option> 2 </option>
                    <option> 3 </option>
                    <option> 4 </option>
                  </select>
                </div>
                <div className="col-md-12 ">
                  <a
                    href="Search_results.html"
                    className="btn btn-block btn-lg btn-primary mt-2"
                  >

                    Search
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section >
      </Fragment >
    )
  }
}

export default UmrahSearch;
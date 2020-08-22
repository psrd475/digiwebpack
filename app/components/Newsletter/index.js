import React, { Component, Fragment } from 'react';

class Newsletter extends Component {
  componentDidMount() {
    AOS.init();
    $('.dropdown-menu .form-group').click(function (e) {
      e.stopPropagation();
    });
  }
  render() {
    return (
      <Fragment>
        <section className="newsletter mb-3 mb-lg-5">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-offset={100}
            data-aos-duration={1000}
            data-aos-delay={100}
          >
            <div className="bg-dark newsletter-inner p-4 round">
              <div className="row pt-2">
                <div className="col-lg-4">
                  <h3 className="mb-3 text-light"> اشترك في نشرتنا الاخبارية </h3>
                  <p className="text-white">
                    لتصلك آخر العروض المتميزة الى بريدك الالكتروني
          </p>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-md-5 form-group">
                      <label htmlFor=" " className="form-label">
                        الاسم
              </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-5 form-group">
                      <label htmlFor=" " className="form-label">
                        البريد الالكتروني
              </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-2 form-group pt-0 pt-md-4">
                      <a
                        href="#submit"
                        className="btn btn-primary   btn-block mt-2 px-0 text-center"
                      >
                        <span>اشترك</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment >
    )
  }
}

export default Newsletter;
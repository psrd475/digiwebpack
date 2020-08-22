import React, { Component, Fragment } from 'react';

class Features extends Component {
  render() {
    return (
      <Fragment>
        <section className="home-features py-3 py-lg-5 mb-3 mb-lg-5  overflow-hidden">
          <div className="container">
            <div className="row mt-3 mt-lg-0">
              <div
                className="col-md-4 col-xl-4"
                data-aos="fade-up"
                data-aos-offset={200}
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className="d-flex align-items-center py-2 py-lg-4">
                  <i className="fal fa-fw fa-3x fa-binoculars cl-1" />
                  <h3 className="feature-title ml-xl-3">سهولة البحث</h3>
                </div>
                <p className="pr-xl-4 pl-5 pl-md-0">
                  {" "}
          مكان واحد للبحث يحتوي على مختلف البرامج التي يمكنك الاختيار منها{" "}
                </p>
              </div>
              <div
                className="col-md-4 col-xl-4"
                data-aos="fade-up"
                data-aos-offset={200}
                data-aos-duration={1000}
                data-aos-delay={300}
              >
                <div className="d-flex align-items-center py-2 py-lg-4">
                  <i className="fal fa-fw fa-3x fa-thumbs-up cl-2" />
                  <h3 className="feature-title ml-xl-3"> عروض حصرية</h3>
                </div>
                <p className="pr-xl-4 pl-5 pl-md-0">
                  {" "}
          مجموعة من العروض والخصومات الخاصة بالبرامج تراها فقط عند زوار{" "}
                </p>
              </div>
              <div
                className="col-md-4 col-xl-4"
                data-aos="fade-up"
                data-aos-offset={200}
                data-aos-duration={1000}
                data-aos-delay={500}
              >
                <div className="d-flex align-items-center py-2 py-lg-4">
                  <i className="fal fa-fw fa-3x fa-shield-check cl-3" />
                  <h3 className="feature-title"> الامان والضمان</h3>
                </div>
                <p className="pr-xl-4 pl-5 pl-md-0">
                  {" "}
          نضمن لك امان عمليات الدفع ونتابع معك الاجرائات حتى وصولك بالسلامة{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Features;
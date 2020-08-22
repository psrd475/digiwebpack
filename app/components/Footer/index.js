import React, { Component, Fragment } from 'react';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footer ">
          <div className="footer-top">
            <div className="container border-bottom">
              <div className="pr-lg-3 row">
                <div className="col-lg-8">
                  <div className="d-flex justify-content-start align-items-center py-0 py-lg-4">
                    <i className="fal  fa-5x fa-mobile text-primary" />
                    <div className="ml-4">
                      <h4 className=" display-3 my-3">

                        تطبيق زوار متوفر الآن في المتاجر الالكترونية لاندوريد وأبل
                      </h4>
                      <p className="text-light">

                        حمل التطبيق لتصلك كل التنبيهات الخاصة بعمليات حجزك وسفرك
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 py-3 py-lg-5 d-flex justify-content-around justify-content-lg-between px-2 px-lg-0 footer-apps">
                  <a href="#android" className="d-inline-block ">

                    <img
                      src="/images/android.png"
                      className="round"
                      width={180}
                      alt="Android store"
                    />
                  </a>
                  <a href="#ios" className="d-inline-block ">

                    <img
                      src="/images/ios.png"
                      className="round"
                      width={180}
                      alt="Apple store"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="container">
              <div className="pr-lg-3 row">
                <div className="align-items-center col-lg-8 d-flex flex-row justify-content-center justify-content-lg-start py-2 py-lg-0">
                  <p className="d-inline-block my-3"> نوفر اشهر طرق الدفع </p>
                  <ul className="d-flex flex-row justify-content-between payment-list px-3">
                    <li>
                      <span href="#" className="d-block p-4 px-3">
                        <img src="/images/visa.svg" width={90} alt="Visa" />
                        <span className="d-none">Visa</span>
                      </span>
                    </li>
                    <li>
                      <span href="#" className="d-block p-3 pr-3">
                        <img
                          src="/images/mastercard.svg"
                          width={75}
                          alt="mastercard"
                        />
                        <span className="d-none">mastercard</span>
                      </span>
                    </li>
                    <li>
                      <span className="d-block p-3">
                        <img
                          src="/images/american-express.svg"
                          width={44}
                          alt="american-express"
                        />
                        <span className="d-none">american-express</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="align-items-center col-lg-4 d-flex flex-row justify-content-center justify-content-lg-between px-2 px-lg-0 py-2 py-lg-0">
                  <p className="d-inline-block my-3 "> تواصل معنا </p>
                  <ul className="social-media d-flex flex-row justify-content-between ml-5">
                    <li>
                      <a href="#twitter">
                        <i className="fab fa-fw fa-2x fa-twitter-square" />
                        <span className="d-none">twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="#facebook">
                        <i className="fab fa-fw fa-2x fa-facebook-square" />
                        <span className="d-none">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="#linkedin">
                        <i className="fa fa-fw fa-2x fa-linkedin-square" />
                        <span className="d-none">linkedin</span>
                      </a>
                    </li>
                    <li>
                      <a href="#youtube">
                        <i className="fab fa-fw fa-2x fa-youtube-square" />
                        <span className="d-none">youtube</span>
                      </a>
                    </li>
                    <li>
                      <a href="#instagram">
                        <i className="fab fa-fw fa-2x fa-instagram-square" />
                        <span className="d-none">instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="pr-lg-3 row">
                <div className="col-md-7 col-lg-8">
                  <ul className="footer-bottom-list  d-flex flex-row align-items-between">
                    <li>
                      <a href="#" className="d-inline-block pr-3 pr-md-4 py-1 py-md-3">

                        عن عمــرة
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-inline-block pr-3 pr-md-4 py-1 py-md-3">

                        أسئلة وأجوبة
              </a>
                    </li>
                    <li>
                      <a href="#" className="d-inline-block pr-3 pr-md-4 py-1 py-md-3">

                        الشروط والاحكام
                      </a>
                    </li>
                    <li>
                      <a
                        href="sitemap.html"
                        className="d-inline-block pr-3 pr-md-4 py-1 py-md-3"
                      >
                        دليل المستخدم
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-5 col-lg-4 d-flex flex-row align-items-center justify-content-between  px-4 px-md-2 px-lg-0">
                  <p className="copyrights  pr-4 py-3 m-0">

                    جميع الحقوق محفوظة © 2018 لشركة علم
                  </p>
                  <a href="https://www.elm.sa/ar/Pages/default.aspx" target="_blank">
                    <img width={50} src="/images/elm-logo.svg" alt="elm logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default Footer;
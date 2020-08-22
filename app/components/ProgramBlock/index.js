import React, { Component, Fragment } from 'react';

class ProgramBlock extends Component {
  render() {
    return (
      <Fragment>
        <a href="program_details.html" className="pro-block d-block">
          <div className="row pro-top m-0">
            <div className="col-6 pro-top-content border-left">
              <img
                width={250}
                src="https://o.aolcdn.com/images/dims?resize=1000%2C1000%2Cshrink&image_uri=https%3A%2F%2Fs.blogcdn.com%2Fslideshows%2Fimages%2Fslides%2F761%2F286%2F6%2FS7612866%2Fslug%2Fl%2Fdeluxe-in-5-star-hotel-in-moscow-1.jpg&client=amp-blogside-v2&signature=2ab8660fcef1e433041ff43d705688dc92b689ad"
                alt=""
              />
              <div className="pro-top-title">
                <p className="mb-1 small text-light">الاقامة في مكة 7 ليالي </p>
                <h6 className="mb-1 text-white">
                  <span>مكة ميلينيوم</span>
                  <span className="d-inlin-block px-2 small">
                    <i className="fal  fa-star text-warning" />
                    <i className="fal  fa-star text-warning" />
                    <i className="fal  fa-star text-warning" />
                  </span>
                </h6>
              </div>
            </div>
            <div className="col-6 pro-top-content">
              <img
                width={250}
                src="https://i.pinimg.com/564x/ca/03/2c/ca032c01895f5f66c617791d7f18a194.jpg"
                alt=""
              />
              <div className="pro-top-title">
                <p className="mb-1 small text-light">الاقامة في المدينة 3 ليالي </p>
                <h6 className="mb-1 text-white">
                  <span>جراند ميركيور المدينة </span>
                  <span className="d-inlin-block px-2 small">
                    <i className="fal  fa-star text-warning" />
                    <i className="fal  fa-star text-warning" />
                    <i className="fal  fa-star text-warning" />
                    <i className="fal  fa-star text-warning" />
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="pro-bottom p-3">
            <h4 className="text-primary mb-2 display-4">
              شركة أجيليكا للسياحة
      <span>المستوى الاول </span>
            </h4>
            <p className="m-0 d-flex justify-content-between align-items-center">
              <span>من 2018/07/09 الى 2018/07/09</span>
              <span>
                ابتداء من
        <b> 4800 ريال</b>
              </span>
            </p>
          </div>
        </a>
      </Fragment>
    )
  }
}

export default ProgramBlock;
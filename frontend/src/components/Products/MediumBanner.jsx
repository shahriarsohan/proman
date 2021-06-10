import React, { Component } from "react";

export default class MediumBanner extends Component {
  render() {
    return (
      <section className="midium-banner">
        <div className="container">
          <div className="row">
            {/* Single Banner  */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-banner">
                <img
                  src="https://wpthemesgrid.com/themes/eshop/images/mid-banner1.jpg"
                  alt="#"
                />
                <div className="content">
                  <p>Man's Collectons</p>
                  <h3>
                    Man's items <br />
                    Up to<span> 50%</span>
                  </h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
            {/* Single Banner  */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-banner">
                <img
                  src="https://wpthemesgrid.com/themes/eshop/images/mid-banner1.jpg"
                  alt="#"
                />
                <div className="content">
                  <p>shoes women</p>
                  <h3>
                    mid season <br /> up to <span>70%</span>
                  </h3>
                  <a href="#" className="btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
          </div>
        </div>
      </section>
    );
  }
}

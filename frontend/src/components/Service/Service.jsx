import React, { Component } from "react";

export default class Service extends Component {
  render() {
    return (
      <section className="shop-services section home">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="ti-rocket" />
                <h4>Free shiping</h4>
                <p>
                  Orders over{" "}
                  <img width="15px" height="15px" src="/images/taka.png" />
                  1000
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="ti-reload" />
                <h4>Free Return</h4>
                <p>Within 03 days returns(C.A)</p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="ti-lock" />
                <h4>Sucure Payment</h4>
                <p>100% secure payment</p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="ti-tag" />
                <h4>Best Peice</h4>
                <p>Guaranteed price</p>
              </div>
              {/* End Single Service */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

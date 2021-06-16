import React, { Component } from "react";

export default class featuredcat extends Component {
  render() {
    return (
      <div className="product-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Categories</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-info">
                <div className="tab-content" id="myTabContent">
                  {/* Start Single Tab */}
                  <div
                    className="tab-pane fade show active"
                    id="man"
                    role="tabpanel"
                  >
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-5">
                          <li className="item">
                            <div className="feature-box">
                              <a href="#">
                                <img src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/feature_2.jpg" />
                              </a>
                            </div>
                            <span>T-Shirts</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-5">
                          <li className="item">
                            <div className="feature-box">
                              <a href="#">
                                <img src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/feature_1.jpg" />
                              </a>
                            </div>
                            <span>T-Shirts</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-5">
                          <li className="item">
                            <div className="feature-box">
                              <a href="#">
                                <img src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/feature_2.jpg" />
                              </a>
                            </div>
                            <span>T-Shirts</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-5">
                          <li className="item">
                            <div className="feature-box">
                              <a href="#">
                                <img src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/feature_1.jpg" />
                              </a>
                            </div>
                            <span>T-Shirts</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-5">
                          <li className="item">
                            <div className="feature-box">
                              <a href="#">
                                <img src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/feature_2.jpg" />
                              </a>
                            </div>
                            <span>T-Shirts</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-5">
                          <li className="item">
                            <div className="feature-box">
                              <a href="#">
                                <img src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/feature_1.jpg" />
                              </a>
                            </div>
                            <span>T-Shirts</span>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ End Single Tab */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

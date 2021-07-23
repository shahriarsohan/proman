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
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                          <li className="item">
                            <div className="feature-box">
                              <a href="#">
                                <img src="/images/movie.webp" />
                              </a>
                            </div>
                            <span>Movie</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                          <li className="item">
                            <div className="feature-box">
                              <a href="#">
                                <img src="/images/games.webp" />
                              </a>
                            </div>
                            <span>Game</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                          <li className="item">
                            <div className="feature-box">
                              <a href="#">
                                <img src="/images/life.webp" />
                              </a>
                            </div>
                            <span>Life</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                          <li className="item">
                            <div className="feature-box">
                              <a href="#">
                                <img src="/images/sports.webp" />
                              </a>
                            </div>
                            <span>Sports</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                          <li className="item">
                            <div className="feature-box">
                              <a href="#">
                                <img src="/images/trend.webp" />
                              </a>
                            </div>
                            <span>Trend</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                          <li className="item">
                            <div className="feature-box">
                              <a href="#">
                                <img src="/images/programming.webp" />
                              </a>
                            </div>
                            <span>Programming</span>
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

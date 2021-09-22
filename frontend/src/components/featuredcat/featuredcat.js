import React, { Component } from "react";
import Link from "next/link";

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
                              <Link href={`/shop/filter/products?cat=Movie`}>
                                <a>
                                  <img src="/images/movie.webp" />
                                </a>
                              </Link>
                            </div>
                            <span>Movie</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                          <li className="item">
                            <div className="feature-box">
                              <Link href={`/shop/filter/products?cat=Game`}>
                                <a>
                                  <img src="/images/games.webp" />
                                </a>
                              </Link>
                            </div>
                            <span>Game</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                          <li className="item">
                            <div className="feature-box">
                              <Link href={`/shop/filter/products?cat=Life`}>
                                <a>
                                  <img src="/images/life.webp" />
                                </a>
                              </Link>
                            </div>
                            <span>Life</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                          <li className="item">
                            <div className="feature-box">
                              <Link href={`/shop/filter/products?cat=Sports`}>
                                <a>
                                  <img src="/images/sports.webp" />
                                </a>
                              </Link>
                            </div>
                            <span>Sports</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                          <li className="item">
                            <div className="feature-box">
                              <Link href={`/shop/filter/products?cat=Trend`}>
                                <a>
                                  <img src="/images/trend.webp" />
                                </a>
                              </Link>
                            </div>
                            <span>Trend</span>
                          </li>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                          <li className="item">
                            <div className="feature-box">
                              <Link
                                href={`/shop/filter/products?cat=Programming`}
                              >
                                <a>
                                  <img src="/images/programming.webp" />
                                </a>
                              </Link>
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

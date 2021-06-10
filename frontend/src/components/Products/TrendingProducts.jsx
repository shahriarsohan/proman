import React, { Component } from "react";
import ContentLoader, { Facebook } from "react-content-loader";

import TrendingProductCard from "../../container/TrendingProductCard";

export default class TrendingProducts extends Component {
  render() {
    const { p } = this.props;
    console.log(p);
    return (
      <div className="product-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Item</h2>
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
                        {p
                          ? p.map((p) => {
                              return (
                                <TrendingProductCard
                                  name={p.name}
                                  thumbnail={p.thumbnail}
                                  slug={p.slug}
                                  id={p.id}
                                />
                              );
                            })
                          : ""}
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

import React, { Component } from "react";

import TrendingProductCard from "../../container/TrendingProductCard";

export default class TrendingProducts extends Component {
  render() {
    const { p } = this.props;
    //console.log(p);
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
                                  price={p.price}
                                  discount_price={p.discount_price}
                                  bogo={p.buy_one_get_one}
                                  few_left={p.few_left}
                                  out_of_stock={p.out_of_stock}
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

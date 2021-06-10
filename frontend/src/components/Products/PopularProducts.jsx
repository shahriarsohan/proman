import React, { Component } from "react";
import BestSellingCard from "../../container/BestSellingCard";

export default class PopularProducts extends Component {
  render() {
    const { bestselling } = this.props;
    console.log(bestselling);
    return (
      <div className="product-area most-popular section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Best Selling</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="owl-carousel popular-slider">
                {bestselling
                  ? bestselling.map((p) => {
                      return (
                        <BestSellingCard
                          slug={p.slug}
                          name={p.name}
                          price={p.price}
                          discount_price={p.discount_price}
                        />
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

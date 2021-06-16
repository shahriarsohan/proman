import React, { Component } from "react";
import FeaturedCard from "../../container/FeaturedCard";

export default class FeaturedProducts extends Component {
  render() {
    const { featured } = this.props;
    return (
      <div className="product-area most-popular section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Featured Item</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="owl-carousel popular-slider">
                {featured
                  ? featured.map((p) => {
                      return (
                        <FeaturedCard
                          img={p.thumbnail}
                          name={p.name}
                          slug={p.slug}
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

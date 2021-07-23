import React, { Component } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import FeaturedCard from "../../container/FeaturedCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

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
              <div className="row">
                <div className="col-12">
                  <Carousel
                    arrows={true}
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="all 0.5s 0s ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
                    {featured
                      ? featured.map((p) => {
                          return (
                            <FeaturedCard
                              img={p.thumbnail}
                              slug={p.slug}
                              name={p.name}
                              price={p.price}
                              discount_price={p.discount_price}
                            />
                          );
                        })
                      : ""}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

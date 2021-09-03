import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          {this.props.newProduct.new_qs.map((item) => {
            <div className="single-product">
              <div className="product-img">
                <a href="product-details.html">
                  <img
                    className="default-img"
                    //   src={
                    //     img
                    //       ? `http://promantest-env.eba-u7qpm2r2.ap-south-1.elasticbeanstalk.com${img}`
                    //       : "https://via.placeholder.com/550x750"
                    //   }
                    alt={this.props.name}
                  />

                  <span className="out-of-stock">Hot</span>
                </a>
                <div className="button-head">
                  <div className="product-action">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModal"
                      title="Quick View"
                      href="#"
                    >
                      <i
                        onClick={() => this.showModalwithInfo(this.props.slug)}
                        className=" ti-eye"
                      />
                      <span>Quick Shop</span>
                    </a>
                    <a title="Wishlist" href="#">
                      <i className=" ti-heart " />
                      <span>Add to Wishlist</span>
                    </a>
                  </div>
                  <div className="product-action-2">
                    <a title="Add to cart" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <h3>
                  <Link href={`/details/${this.props.slug}`}>
                    {this.props.name}
                  </Link>
                </h3>
                <div className="product-price">
                  <span className="old">${this.props.price}</span>
                  <span>${this.props.discount_price}</span>
                </div>
              </div>
            </div>;
          })}
        </Slider>
      </div>
    );
  }
}

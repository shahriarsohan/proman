import Image from "next/image";
import React from "react";

const ShopListSingle = ({ product }) => {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-product">
            <div className="product-img">
              <a href="product-details.html">
                <Image
                  className="default-img"
                  src="https://via.placeholder.com/550x750"
                  width="550"
                  height="750"
                  alt="#"
                />
                <img
                  className="hover-img"
                  src="https://via.placeholder.com/550x750"
                  alt="#"
                />
              </a>
              <div className="button-head">
                <div className="product-action">
                  <a
                    data-toggle="modal"
                    data-target="#exampleModal"
                    title="Quick View"
                    href="#"
                  >
                    <i className=" ti-eye" />
                    <span>Quick Shop</span>
                  </a>
                  <a title="Wishlist" href="#">
                    <i className=" ti-heart " />
                    <span>Add to Wishlist</span>
                  </a>
                  <a title="Compare" href="#">
                    <i className="ti-bar-chart-alt" />
                    <span>Add to Compare</span>
                  </a>
                </div>
                <div className="product-action-2">
                  <a title="Add to cart" href="#">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-6 col-6">
          <div className="list-content">
            <div className="product-content">
              <div className="product-price">
                <span>$29.00</span>
              </div>
              <h3 className="title">
                <a href="product-details.html">{product.name}</a>
              </h3>
              <div className="review-inner">
                <div className="ratings">
                  <ul className="rating">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-o" />
                    </li>
                    <li className="total">(4.5)</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="des">{product.short_desc}</p>
            <a href="#" className="btn">
              But Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopListSingle;

import React, { Component } from "react";

export default class PopularProductsForShop extends Component {
  render() {
    return (
      <div className="product-area most-popular">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="owl-carousel popular-slider">
                {/* Start Single Product */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="https://via.placeholder.com/550x750"
                        alt="#"
                      />
                      <img
                        className="hover-img"
                        src="https://via.placeholder.com/550x750"
                        alt="#"
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
                  <div className="product-content">
                    <h3>
                      <a href="product-details.html">
                        Black Sunglass For Women
                      </a>
                    </h3>
                    <div className="product-price">
                      <span className="old">$60.00</span>
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
                {/* End Single Product */}
                {/* Start Single Product */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="https://via.placeholder.com/550x750"
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
                  <div className="product-content">
                    <h3>
                      <a href="product-details.html">Women Hot Collection</a>
                    </h3>
                    <div className="product-price">
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
                {/* End Single Product */}
                {/* Start Single Product */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="https://via.placeholder.com/550x750"
                        alt="#"
                      />
                      <img
                        className="hover-img"
                        src="https://via.placeholder.com/550x750"
                        alt="#"
                      />
                      <span className="new">New</span>
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
                  <div className="product-content">
                    <h3>
                      <a href="product-details.html">Awesome Pink Show</a>
                    </h3>
                    <div className="product-price">
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
                {/* End Single Product */}
                {/* Start Single Product */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="https://via.placeholder.com/550x750"
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
                  <div className="product-content">
                    <h3>
                      <a href="product-details.html">Awesome Bags Collection</a>
                    </h3>
                    <div className="product-price">
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
                {/* End Single Product */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

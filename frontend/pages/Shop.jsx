import axios from "axios";

import React, { Component } from "react";
import PromotionalSlider from "../src/components/Hero/PromotinalSlider";

import NavbarTwo from "../src/components/Navbar/NavbarTwo";
import PopularProductsForShop from "../src/components/ScrollProductsForShop";

export default class Shop extends Component {
  state = {
    loading: false,
    products: [],
  };

  componentDidMount() {
    this.setState({ loading: true });

    axios
      .get("http://127.0.0.1:8000/api/v1/products/list")
      .then((res) =>
        this.setState({ loading: false, products: res.data.skin_care_qs })
      );
  }

  render() {
    return (
      <>
        <NavbarTwo />
        <div className="mt-5">
          <PromotionalSlider />
        </div>

        <div className="product-area">
          <div className="container">
            <div className="row">
              <PopularProductsForShop />
              <div className="col-md-9">
                <div className="product-info">
                  <div className="nav-main">
                    {/* Tab Nav */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#man"
                          role="tab"
                        >
                          Man
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#women"
                          role="tab"
                        >
                          Woman
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#kids"
                          role="tab"
                        >
                          Kids
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#accessories"
                          role="tab"
                        >
                          Accessories
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#essential"
                          role="tab"
                        >
                          Essential
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#prices"
                          role="tab"
                        >
                          Prices
                        </a>
                      </li>
                    </ul>
                    {/*/ End Tab Nav */}
                  </div>

                  <div className="tab-content" id="myTabContent">
                    {/* Start Single Tab */}
                    <div
                      className="tab-pane fade show active"
                      id="man"
                      role="tabpanel"
                    >
                      <div className="tab-single">
                        <div className="row">
                          {this.state.products.map((p) => {
                            return (
                              <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                      <a href="product-details.html">
                                        Women Hot Collection
                                      </a>
                                    </h3>
                                    <div className="product-price">
                                      <span>$29.00</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="women" role="tabpanel">
                      <div className="tab-single">
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Women Hot Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Pink Show
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Bags Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Women Pant Collectons
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Bags Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <span className="price-dec">30% Off</span>
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
                                    Awesome Cap For Women
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Polo Dress For Women
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="kids" role="tabpanel">
                      <div className="tab-single">
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Women Hot Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Pink Show
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Bags Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Women Pant Collectons
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Bags Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <span className="price-dec">30% Off</span>
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
                                    Awesome Cap For Women
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Polo Dress For Women
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div
                      className="tab-pane fade"
                      id="accessories"
                      role="tabpanel"
                    >
                      <div className="tab-single">
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Women Hot Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Pink Show
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Bags Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Women Pant Collectons
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Bags Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <span className="price-dec">30% Off</span>
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
                                    Awesome Cap For Women
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Polo Dress For Women
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div
                      className="tab-pane fade"
                      id="essential"
                      role="tabpanel"
                    >
                      <div className="tab-single">
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Women Hot Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Pink Show
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Bags Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Women Pant Collectons
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Bags Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <span className="price-dec">30% Off</span>
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
                                    Awesome Cap For Women
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Polo Dress For Women
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="prices" role="tabpanel">
                      <div className="tab-single">
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Women Hot Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Pink Show
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Bags Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Women Pant Collectons
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Awesome Bags Collection
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <span className="price-dec">30% Off</span>
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
                                    Awesome Cap For Women
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                                  <a href="product-details.html">
                                    Polo Dress For Women
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                          </div>
                          <div className="row mt--60">
                            <div className="col-md-12">
                              <div className="htc__loadmore__btn">
                                <a href="#">load more</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt--60">
                        <div className="col-md-12">
                          <div className="htc__loadmore__btn">
                            <a href="#">load more</a>
                          </div>
                        </div>
                      </div>
                      <div className="row mt--60">
                        <div className="col-md-12">
                          <div className="htc__loadmore__btn">
                            <a href="#">load more</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Tab */}
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="nav-main">
                  {/* Tab Nav */}
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#man"
                        role="tab"
                      >
                        FILTER
                      </a>
                    </li>
                  </ul>
                  {/*/ End Tab Nav */}
                </div>
                <div className="tab-content" id="myTabContent">
                  {/* Start Single Tab */}
                  <div
                    className="tab-pane fade show active"
                    id="man"
                    role="tabpanel"
                  >
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-12">
                          <div className="single-product">
                            <div className="card">
                              <article className="card-group-item">
                                <header className="card-header">
                                  <h6 className="title">Range input </h6>
                                </header>
                                <div className="card-body">
                                  <input
                                    className="custom-range"
                                    min={0}
                                    max={100}
                                    name
                                    type="range"
                                  />
                                  <div className="form-row">
                                    <div className="form-group col-md-6">
                                      <label>Min</label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="$0"
                                      />
                                    </div>
                                    <div className="form-group col-md-6 text-right">
                                      <label>Max</label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        placeholder="$1,0000"
                                      />
                                    </div>
                                  </div>
                                </div>{" "}
                                {/* card-body.// */}
                              </article>{" "}
                              {/* card-group-item.// */}
                              <article className="card-group-item">
                                <header className="card-header">
                                  <h6 className="title">Selection </h6>
                                </header>
                                <div className="card-body">
                                  <div className="custom-control custom-checkbox">
                                    <span className="float-right badge badge-light round">
                                      7
                                    </span>
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Check4"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="Check4"
                                    >
                                      Other Brand
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <span className="float-right badge badge-light round">
                                      7
                                    </span>
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Check4"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="Check4"
                                    >
                                      Other Brand
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <span className="float-right badge badge-light round">
                                      7
                                    </span>
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Check4"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="Check4"
                                    >
                                      Other Brand
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <span className="float-right badge badge-light round">
                                      7
                                    </span>
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Check4"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="Check4"
                                    >
                                      Other Brand
                                    </label>
                                  </div>
                                  {/* form-check.// */}
                                </div>
                                <button className="btn btn-primary text-center">
                                  Apply
                                </button>
                                {/* card-body.// */}
                              </article>
                              {/* card-group-item.// */}
                            </div>{" "}
                            {/* card.// */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

import React, { Component } from "react";

export default class Test extends Component {
  render() {
    return (
      <section className="htc__product__area pb--100 bg__white mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="product-categories-all">
                <div className="product-categories-title">
                  <h3>BAGS &amp; SHOES</h3>
                </div>
                <div className="product-categories-menu">
                  <ul>
                    <li>
                      <a href="#">awesome Rings</a>
                    </li>
                    <li>
                      <a href="#">Hot Earrings</a>
                    </li>
                    <li>
                      <a href="#">Jewelry Sets</a>
                    </li>
                    <li>
                      <a href="#">Beads Jewelry</a>
                    </li>
                    <li>
                      <a href="#">Men's Watches</a>
                    </li>
                    <li>
                      <a href="#">Women’s Watches</a>
                    </li>
                    <li>
                      <a href="#">Popular Bracelets</a>
                    </li>
                    <li>
                      <a href="#"> Pendant Necklaces</a>
                    </li>
                    <li>
                      <a href="#">Children's Watches</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="product-style-tab">
                <div className="product-tab-list">
                  {/* Nav tabs */}
                  <ul className="tab-style" role="tablist">
                    <li className="active">
                      <a href="#home5" data-toggle="tab">
                        <div className="tab-menu-text">
                          <h4>latest </h4>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#home6" data-toggle="tab">
                        <div className="tab-menu-text">
                          <h4>best sale </h4>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#home7" data-toggle="tab">
                        <div className="tab-menu-text">
                          <h4>top rated</h4>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#home8" data-toggle="tab">
                        <div className="tab-menu-text">
                          <h4>on sale</h4>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content another-product-style jump">
                  <div className="tab-pane active" id="home5">
                    <div className="row">
                      <div className="product-slider-active owl-carousel">
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/1.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/2.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/3.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/product/4.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/5.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="home6">
                    <div className="row">
                      <div className="product-slider-active owl-carousel">
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/product/4.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/5.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/product/4.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/7.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/8.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/9.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="home7">
                    <div className="row">
                      <div className="product-slider-active owl-carousel">
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/2.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/1.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/5.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/4.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/3.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/7.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="home8">
                    <div className="row">
                      <div className="product-slider-active owl-carousel">
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/9.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/5.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/3.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/4.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/2.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 single__pro col-lg-4 cat--1 col-sm-4 col-xs-12">
                          <div className="product">
                            <div className="product__inner">
                              <div className="pro__thumb">
                                <a href="#">
                                  <img
                                    src="images/product/7.png"
                                    alt="product images"
                                  />
                                </a>
                              </div>
                              <div className="product__hover__info">
                                <ul className="product__action">
                                  <li>
                                    <a
                                      data-toggle="modal"
                                      data-target="#productModal"
                                      title="Quick View"
                                      className="quick-view modal-view detail-link"
                                      href="#"
                                    >
                                      <span className="ti-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Add TO Cart" href="cart.html">
                                      <span className="ti-shopping-cart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a title="Wishlist" href="wishlist.html">
                                      <span className="ti-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product__details">
                              <h2>
                                <a href="product-details.html">
                                  Simple Black Clock
                                </a>
                              </h2>
                              <ul className="product__price">
                                <li className="old__price">$16.00</li>
                                <li className="new__price">$10.00</li>
                              </ul>
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
        </div>
      </section>
    );
  }
}

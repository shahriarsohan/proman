import React, { Component } from "react";
import Image from "next/image";
import NavbarTwo from "../src/components/Navbar/NavbarTwo";

export default class Details extends Component {
  render() {
    return (
      <div>
        <NavbarTwo />
        <div className="wrapper fixed__footer">
          <div className="body__overlay" />
          {/* Start Offset Wrapper */}
          <div className="offset__wrapper">
            {/* Start Search Popap */}
            <div className="search__area">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="search__inner">
                      <form action="#" method="get">
                        <input placeholder="Search here... " type="text" />
                        <button type="submit" />
                      </form>
                      <div className="search__close__btn">
                        <span className="search__close__btn_icon">
                          <i className="zmdi zmdi-close" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Search Popap */}
            {/* Start Offset MEnu */}
            <div className="offsetmenu">
              <div className="offsetmenu__inner">
                <div className="offsetmenu__close__btn">
                  <a href="#">
                    <i className="zmdi zmdi-close" />
                  </a>
                </div>
                <div className="off__contact">
                  <div className="logo">
                    <a href="index.html">
                      <img src="images/logo/logo.png" alt="logo" />
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetu adipisicing elit sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                <ul className="sidebar__thumd">
                  <li>
                    <a href="#">
                      <img
                        src="images/sidebar-img/1.jpg"
                        alt="sidebar images"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/sidebar-img/2.jpg"
                        alt="sidebar images"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/sidebar-img/3.jpg"
                        alt="sidebar images"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/sidebar-img/4.jpg"
                        alt="sidebar images"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/sidebar-img/5.jpg"
                        alt="sidebar images"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/sidebar-img/6.jpg"
                        alt="sidebar images"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/sidebar-img/7.jpg"
                        alt="sidebar images"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/sidebar-img/8.jpg"
                        alt="sidebar images"
                      />
                    </a>
                  </li>
                </ul>
                <div className="offset__widget">
                  <div className="offset__single">
                    <h4 className="offset__title">Language</h4>
                    <ul>
                      <li>
                        <a href="#"> Engish </a>
                      </li>
                      <li>
                        <a href="#"> French </a>
                      </li>
                      <li>
                        <a href="#"> German </a>
                      </li>
                    </ul>
                  </div>
                  <div className="offset__single">
                    <h4 className="offset__title">Currencies</h4>
                    <ul>
                      <li>
                        <a href="#"> USD : Dollar </a>
                      </li>
                      <li>
                        <a href="#"> EUR : Euro </a>
                      </li>
                      <li>
                        <a href="#"> POU : Pound </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="offset__sosial__share">
                  <h4 className="offset__title">Follow Us On Social</h4>
                  <ul className="off__soaial__link">
                    <li>
                      <a className="bg--twitter" href="#" title="Twitter">
                        <i className="zmdi zmdi-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="bg--instagram" href="#" title="Instagram">
                        <i className="zmdi zmdi-instagram" />
                      </a>
                    </li>
                    <li>
                      <a className="bg--facebook" href="#" title="Facebook">
                        <i className="zmdi zmdi-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="bg--googleplus"
                        href="#"
                        title="Google Plus"
                      >
                        <i className="zmdi zmdi-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a className="bg--google" href="#" title="Google">
                        <i className="zmdi zmdi-google" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Offset MEnu */}
            {/* Start Cart Panel */}
            <div className="shopping__cart">
              <div className="shopping__cart__inner">
                <div className="offsetmenu__close__btn">
                  <a href="#">
                    <i className="zmdi zmdi-close" />
                  </a>
                </div>
                <div className="shp__cart__wrap">
                  <div className="shp__single__product">
                    <div className="shp__pro__thumb">
                      <a href="#">
                        <img
                          src="images/product/sm-img/1.jpg"
                          alt="product images"
                        />
                      </a>
                    </div>
                    <div className="shp__pro__details">
                      <h2>
                        <a href="product-details.html">
                          BO&amp;Play Wireless Speaker
                        </a>
                      </h2>
                      <span className="quantity">QTY: 1</span>
                      <span className="shp__price">$105.00</span>
                    </div>
                    <div className="remove__btn">
                      <a href="#" title="Remove this item">
                        <i className="zmdi zmdi-close" />
                      </a>
                    </div>
                  </div>
                  <div className="shp__single__product">
                    <div className="shp__pro__thumb">
                      <a href="#">
                        <img
                          src="images/product/sm-img/2.jpg"
                          alt="product images"
                        />
                      </a>
                    </div>
                    <div className="shp__pro__details">
                      <h2>
                        <a href="product-details.html">Brone Candle</a>
                      </h2>
                      <span className="quantity">QTY: 1</span>
                      <span className="shp__price">$25.00</span>
                    </div>
                    <div className="remove__btn">
                      <a href="#" title="Remove this item">
                        <i className="zmdi zmdi-close" />
                      </a>
                    </div>
                  </div>
                </div>
                <ul className="shoping__total">
                  <li className="subtotal">Subtotal:</li>
                  <li className="total__price">$130.00</li>
                </ul>
                <ul className="shopping__btn">
                  <li>
                    <a href="cart.html">View Cart</a>
                  </li>
                  <li className="shp__checkout">
                    <a href="checkout.html">Checkout</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Cart Panel */}
          </div>
          {/* End Offset Wrapper */}

          {/* Start Product Details */}
          <section className="htc__product__details pt--120 pb--100 bg__white">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                  <div className="product__details__container">
                    {/* Start Small images */}
                    <ul className="product__small__images" role="tablist">
                      <li role="presentation" className="pot-small-img active">
                        <a href="#img-tab-1" role="tab" data-toggle="tab">
                          <img
                            src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/product-details/small-img/1.jpg"
                            alt="small-image"
                          />
                        </a>
                      </li>
                      <li role="presentation" className="pot-small-img">
                        <a href="#img-tab-2" role="tab" data-toggle="tab">
                          <img
                            src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/product-details/small-img/1.jpg"
                            alt="small-image"
                          />
                        </a>
                      </li>
                      <li
                        role="presentation"
                        className="pot-small-img hidden-xs"
                      >
                        <a href="#img-tab-3" role="tab" data-toggle="tab">
                          <img
                            src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/product-details/small-img/1.jpg"
                            alt="small-image"
                          />
                        </a>
                      </li>
                      <li
                        role="presentation"
                        className="pot-small-img hidden-xs hidden-sm"
                      >
                        <a href="#img-tab-4" role="tab" data-toggle="tab">
                          <img
                            src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/tmart/images/product-details/small-img/1.jpg"
                            alt="small-image"
                          />
                        </a>
                      </li>
                    </ul>
                    {/* End Small images */}
                    <div className="product__big__images">
                      <div className="portfolio-full-image tab-content">
                        <div
                          role="tabpanel"
                          //   className="tab-pane fade in active product-video-position"
                          id="img-tab-1"
                        >
                          <Image
                            src="https://image.shutterstock.com/shutterstock/photos/668593321/display_1500/stock-photo-large-beautiful-drops-of-transparent-rain-water-on-a-green-leaf-macro-drops-of-dew-in-the-morning-668593321.jpg"
                            alt="full-image"
                            width="440px"
                            height="590px"
                          />
                          <div className="product-video">
                            <a
                              className="video-popup"
                              href="https://www.youtube.com/watch?v=cDDWvj_q-o8"
                            >
                              <i className="zmdi zmdi-videocam" /> View Video
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 smt-30 xmt-30">
                  <div className="htc__product__details__inner">
                    <div className="pro__detl__title">
                      <h2>Black Clock</h2>
                    </div>
                    <div className="pro__dtl__rating">
                      <ul className="pro__rating">
                        <li>
                          <span className="ti-star" />
                        </li>
                        <li>
                          <span className="ti-star" />
                        </li>
                        <li>
                          <span className="ti-star" />
                        </li>
                        <li>
                          <span className="ti-star" />
                        </li>
                        <li>
                          <span className="ti-star" />
                        </li>
                      </ul>
                      <span className="rat__qun">(Based on 0 Ratings)</span>
                    </div>
                    <div className="pro__details">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit,
                        sed do eiusmod temf incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, nostr exercitation
                        ullamco laboris nisi ut aliquip ex ea.{" "}
                      </p>
                    </div>
                    <ul className="pro__dtl__prize">
                      <li className="old__prize">$15.21</li>
                      <li>$10.00</li>
                    </ul>
                    <div className="pro__dtl__color">
                      <h2 className="title__5">Choose Colour</h2>
                      <ul className="pro__choose__color">
                        <li className="red">
                          <a href="#">
                            <i className="zmdi zmdi-circle" />
                          </a>
                        </li>
                        <li className="blue">
                          <a href="#">
                            <i className="zmdi zmdi-circle" />
                          </a>
                        </li>
                        <li className="perpal">
                          <a href="#">
                            <i className="zmdi zmdi-circle" />
                          </a>
                        </li>
                        <li className="yellow">
                          <a href="#">
                            <i className="zmdi zmdi-circle" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="pro__dtl__size">
                      <h2 className="title__5">Size</h2>
                      <ul className="pro__choose__size">
                        <li>
                          <a href="#">xl</a>
                        </li>
                        <li>
                          <a href="#">m</a>
                        </li>
                        <li>
                          <a href="#">ml</a>
                        </li>
                        <li>
                          <a href="#">lm</a>
                        </li>
                        <li>
                          <a href="#">xxl</a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-action-wrap">
                      <div className="prodict-statas">
                        <span>Quantity :</span>
                      </div>
                      <div className="product-quantity">
                        <form id="myform" method="POST" action="#">
                          <div className="product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                // defaultValue={02}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <ul className="pro__dtl__btn">
                      <li className="buy__now__btn">
                        <a href="#">buy now</a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="ti-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="ti-email" />
                        </a>
                      </li>
                    </ul>
                    <div className="pro__social__share">
                      <h2>Share :</h2>
                      <ul className="pro__soaial__link">
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-google-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Product Details */}
          {/* Start Product tab */}
          <section className="htc__product__details__tab bg__white pb--120">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                  <ul className="product__deatils__tab mb--60" role="tablist">
                    <li role="presentation" className="active">
                      <a href="#description" role="tab" data-toggle="tab">
                        Description
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#sheet" role="tab" data-toggle="tab">
                        Data sheet
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#reviews" role="tab" data-toggle="tab">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="product__details__tab__content">
                    {/* Start Single Content */}
                    <div
                      role="tabpanel"
                      id="description"
                      //   className="product__tab__content fade in active"
                    >
                      <div className="product__description__wrap">
                        <div className="product__desc">
                          <h2 className="title__6">Details</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            noexercit ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id.
                          </p>
                        </div>
                        <div className="pro__feature">
                          <h2 className="title__6">Features</h2>
                          <ul className="feature__list">
                            <li>
                              <a href="#">
                                <i className="zmdi zmdi-play-circle" />
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="zmdi zmdi-play-circle" />
                                Irure dolor in reprehenderit in voluptate velit
                                esse
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="zmdi zmdi-play-circle" />
                                Sed do eiusmod tempor incididunt ut labore et{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="zmdi zmdi-play-circle" />
                                Nisi ut aliquip ex ea commodo consequat.
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content */}
                    {/* Start Single Content */}
                    <div
                      role="tabpanel"
                      id="sheet"
                      className="product__tab__content fade"
                    >
                      <div className="pro__feature">
                        <h2 className="title__6">Data sheet</h2>
                        <ul className="feature__list">
                          <li>
                            <a href="#">
                              <i className="zmdi zmdi-play-circle" />
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="zmdi zmdi-play-circle" />
                              Irure dolor in reprehenderit in voluptate velit
                              esse
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="zmdi zmdi-play-circle" />
                              Irure dolor in reprehenderit in voluptate velit
                              esse
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="zmdi zmdi-play-circle" />
                              Sed do eiusmod tempor incididunt ut labore et{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="zmdi zmdi-play-circle" />
                              Sed do eiusmod tempor incididunt ut labore et{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="zmdi zmdi-play-circle" />
                              Nisi ut aliquip ex ea commodo consequat.
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="zmdi zmdi-play-circle" />
                              Nisi ut aliquip ex ea commodo consequat.
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Content */}
                    {/* Start Single Content */}
                    <div
                      role="tabpanel"
                      id="reviews"
                      className="product__tab__content fade"
                    >
                      <div className="review__address__inner">
                        {/* Start Single Review */}
                        <div className="pro__review">
                          <div className="review__thumb">
                            <img
                              src="images/review/1.jpg"
                              alt="review images"
                            />
                          </div>
                          <div className="review__details">
                            <div className="review__info">
                              <h4>
                                <a href="#">Gerald Barnes</a>
                              </h4>
                              <ul className="rating">
                                <li>
                                  <i className="zmdi zmdi-star" />
                                </li>
                                <li>
                                  <i className="zmdi zmdi-star" />
                                </li>
                                <li>
                                  <i className="zmdi zmdi-star" />
                                </li>
                                <li>
                                  <i className="zmdi zmdi-star-half" />
                                </li>
                                <li>
                                  <i className="zmdi zmdi-star-half" />
                                </li>
                              </ul>
                              <div className="rating__send">
                                <a href="#">
                                  <i className="zmdi zmdi-mail-reply" />
                                </a>
                                <a href="#">
                                  <i className="zmdi zmdi-close" />
                                </a>
                              </div>
                            </div>
                            <div className="review__date">
                              <span>27 Jun, 2016 at 2:30pm</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer accumsan egestas elese ifend.
                              Phasellus a felis at estei to bibendum feugiat ut
                              eget eni Praesent et messages in con sectetur
                              posuere dolor non.
                            </p>
                          </div>
                        </div>
                        {/* End Single Review */}
                        {/* Start Single Review */}
                        <div className="pro__review ans">
                          <div className="review__thumb">
                            <img
                              src="images/review/2.jpg"
                              alt="review images"
                            />
                          </div>
                          <div className="review__details">
                            <div className="review__info">
                              <h4>
                                <a href="#">Gerald Barnes</a>
                              </h4>
                              <ul className="rating">
                                <li>
                                  <i className="zmdi zmdi-star" />
                                </li>
                                <li>
                                  <i className="zmdi zmdi-star" />
                                </li>
                                <li>
                                  <i className="zmdi zmdi-star" />
                                </li>
                                <li>
                                  <i className="zmdi zmdi-star-half" />
                                </li>
                                <li>
                                  <i className="zmdi zmdi-star-half" />
                                </li>
                              </ul>
                              <div className="rating__send">
                                <a href="#">
                                  <i className="zmdi zmdi-mail-reply" />
                                </a>
                                <a href="#">
                                  <i className="zmdi zmdi-close" />
                                </a>
                              </div>
                            </div>
                            <div className="review__date">
                              <span>27 Jun, 2016 at 2:30pm</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer accumsan egestas elese ifend.
                              Phasellus a felis at estei to bibendum feugiat ut
                              eget eni Praesent et messages in con sectetur
                              posuere dolor non.
                            </p>
                          </div>
                        </div>
                        {/* End Single Review */}
                      </div>
                      {/* Start RAting Area */}
                      <div className="rating__wrap">
                        <h2 className="rating-title">Write A review</h2>
                        <h4 className="rating-title-2">Your Rating</h4>
                        <div className="rating__list">
                          {/* Start Single List */}
                          <ul className="rating">
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                          </ul>
                          {/* End Single List */}
                          {/* Start Single List */}
                          <ul className="rating">
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                          </ul>
                          {/* End Single List */}
                          {/* Start Single List */}
                          <ul className="rating">
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                          </ul>
                          {/* End Single List */}
                          {/* Start Single List */}
                          <ul className="rating">
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                          </ul>
                          {/* End Single List */}
                          {/* Start Single List */}
                          <ul className="rating">
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                            <li>
                              <i className="zmdi zmdi-star-half" />
                            </li>
                          </ul>
                          {/* End Single List */}
                        </div>
                      </div>
                      {/* End RAting Area */}
                      <div className="review__box">
                        <form id="review-form">
                          <div className="single-review-form">
                            <div className="review-box name">
                              <input type="text" placeholder="Type your name" />
                              <input
                                type="email"
                                placeholder="Type your email"
                              />
                            </div>
                          </div>
                          <div className="single-review-form">
                            <div className="review-box message">
                              <textarea
                                placeholder="Write your review"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="review-btn">
                            <a className="fv-btn" href="#">
                              submit review
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* End Single Content */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Product tab */}
          {/* Start Footer Area */}
          <footer className="htc__foooter__area gray-bg">
            <div className="container">
              <div className="row">
                <div className="footer__container clearfix">
                  {/* Start Single Footer Widget */}
                  <div className="col-md-3 col-lg-3 col-sm-6">
                    <div className="ft__widget">
                      <div className="ft__logo">
                        <a href="index.html">
                          <img src="images/logo/logo.png" alt="footer logo" />
                        </a>
                      </div>
                      <div className="footer-address">
                        <ul>
                          <li>
                            <div className="address-icon">
                              <i className="zmdi zmdi-pin" />
                            </div>
                            <div className="address-text">
                              <p>
                                194 Main Rd T, FS Rayed <br /> VIC 3057, USA
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="address-icon">
                              <i className="zmdi zmdi-email" />
                            </div>
                            <div className="address-text">
                              <a href="#"> info@example.com</a>
                            </div>
                          </li>
                          <li>
                            <div className="address-icon">
                              <i className="zmdi zmdi-phone-in-talk" />
                            </div>
                            <div className="address-text">
                              <p>+012 345 678 102 </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <ul className="social__icon">
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-google-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Footer Widget */}
                  {/* Start Single Footer Widget */}
                  <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                    <div className="ft__widget">
                      <h2 className="ft__title">Categories</h2>
                      <ul className="footer-categories">
                        <li>
                          <a href="shop-sidebar.html">Men</a>
                        </li>
                        <li>
                          <a href="shop-sidebar.html">Women</a>
                        </li>
                        <li>
                          <a href="shop-sidebar.html">Accessories</a>
                        </li>
                        <li>
                          <a href="shop-sidebar.html">Shoes</a>
                        </li>
                        <li>
                          <a href="shop-sidebar.html">Dress</a>
                        </li>
                        <li>
                          <a href="shop-sidebar.html">Denim</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Start Single Footer Widget */}
                  <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                    <div className="ft__widget">
                      <h2 className="ft__title">Infomation</h2>
                      <ul className="footer-categories">
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href="#">Returns &amp; Exchanges</a>
                        </li>
                        <li>
                          <a href="#">Shipping &amp; Delivery</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Start Single Footer Widget */}
                  <div className="col-md-3 col-lg-3 col-lg-offset-1 col-sm-6 smt-30 xmt-30">
                    <div className="ft__widget">
                      <h2 className="ft__title">Newsletter</h2>
                      <div className="newsletter__form">
                        <p>
                          Subscribe to our newsletter and get 10% off your first
                          purchase .
                        </p>
                        <div className="input__box">
                          <div id="mc_embed_signup">
                            <form
                              action="#"
                              method="post"
                              id="mc-embedded-subscribe-form"
                              name="mc-embedded-subscribe-form"
                              className="validate"
                              target="_blank"
                              noValidate
                            >
                              <div
                                id="mc_embed_signup_scroll"
                                className="htc__news__inner"
                              >
                                <div className="news__input">
                                  <input
                                    type="email"
                                    defaultValue
                                    name="EMAIL"
                                    className="email"
                                    id="mce-EMAIL"
                                    placeholder="Email Address"
                                    required
                                  />
                                </div>
                                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "-5000px",
                                  }}
                                  aria-hidden="true"
                                >
                                  <input
                                    type="text"
                                    name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                                    tabIndex={-1}
                                    defaultValue
                                  />
                                </div>
                                <div className="clearfix subscribe__btn">
                                  <input
                                    type="submit"
                                    defaultValue="Send"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="bst__btn btn--white__color"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Footer Widget */}
                </div>
              </div>
              {/* Start Copyright Area */}
              <div className="htc__copyright__area">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="copyright__inner">
                      <div className="copyright">
                        <p>
                          © 2017{" "}
                          <a href="https://freethemescloud.com/">
                            Free themes Cloud
                          </a>
                          All Right Reserved.
                        </p>
                      </div>
                      <ul className="footer__menu">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="shop.html">Product</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Copyright Area */}
            </div>
          </footer>
          {/* End Footer Area */}
        </div>
        {/* Body main wrapper end */}
        {/* QUICKVIEW PRODUCT */}

        <div id="quickview-wrapper">
          {/* Modal */}
          <div
            className="modal fade"
            id="productModal"
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog modal__container" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-product">
                    {/* Start product images */}
                    <div className="product-images">
                      <div className="main-image images">
                        <img
                          alt="big images"
                          src="images/product/big-img/1.jpg"
                        />
                      </div>
                    </div>
                    {/* end product images */}
                    <div className="product-info">
                      <h1>Simple Fabric Bags</h1>
                      <div className="rating__and__review">
                        <ul className="rating">
                          <li>
                            <span className="ti-star" />
                          </li>
                          <li>
                            <span className="ti-star" />
                          </li>
                          <li>
                            <span className="ti-star" />
                          </li>
                          <li>
                            <span className="ti-star" />
                          </li>
                          <li>
                            <span className="ti-star" />
                          </li>
                        </ul>
                        <div className="review">
                          <a href="#">4 customer reviews</a>
                        </div>
                      </div>
                      <div className="price-box-3">
                        <div className="s-price-box">
                          <span className="new-price">$17.20</span>
                          <span className="old-price">$45.00</span>
                        </div>
                      </div>
                      <div>
                        Designed for simplicity and made from high quality
                        materials. Its sleek geometry and material combinations
                        creates a modern look.
                      </div>
                      <div className="select__color">
                        <h2>Select color</h2>
                        <ul className="color__list">
                          <li className="red">
                            <a title="Red" href="#">
                              Red
                            </a>
                          </li>
                          <li className="gold">
                            <a title="Gold" href="#">
                              Gold
                            </a>
                          </li>
                          <li className="orange">
                            <a title="Orange" href="#">
                              Orange
                            </a>
                          </li>
                          <li className="orange">
                            <a title="Orange" href="#">
                              Orange
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="select__size">
                        <h2>Select size</h2>
                        <ul className="color__list">
                          <li className="l__size">
                            <a title="L" href="#">
                              L
                            </a>
                          </li>
                          <li className="m__size">
                            <a title="M" href="#">
                              M
                            </a>
                          </li>
                          <li className="s__size">
                            <a title="S" href="#">
                              S
                            </a>
                          </li>
                          <li className="xl__size">
                            <a title="XL" href="#">
                              XL
                            </a>
                          </li>
                          <li className="xxl__size">
                            <a title="XXL" href="#">
                              XXL
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="social-sharing">
                        <div className="widget widget_socialsharing_widget">
                          <h3 className="widget-title-modal">
                            Share this product
                          </h3>
                          <ul className="social-icons">
                            <li>
                              <a
                                target="_blank"
                                title="rss"
                                href="#"
                                className="rss social-icon"
                              >
                                <i className="zmdi zmdi-rss" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                title="Linkedin"
                                href="#"
                                className="linkedin social-icon"
                              >
                                <i className="zmdi zmdi-linkedin" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                title="Pinterest"
                                href="#"
                                className="pinterest social-icon"
                              >
                                <i className="zmdi zmdi-pinterest" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                title="Tumblr"
                                href="#"
                                className="tumblr social-icon"
                              >
                                <i className="zmdi zmdi-tumblr" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                title="Pinterest"
                                href="#"
                                className="pinterest social-icon"
                              >
                                <i className="zmdi zmdi-pinterest" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="addtocart-btn">
                        <a href="#">Add to cart</a>
                      </div>
                    </div>
                    {/* .product-info */}
                  </div>
                  {/* .modal-product */}
                </div>
                {/* .modal-body */}
              </div>
              {/* .modal-content */}
            </div>
            {/* .modal-dialog */}
          </div>
          {/* END Modal */}
        </div>
      </div>
    );
  }
}

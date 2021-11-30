import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../src/api/axios";
import { withRouter } from "next/router";

import { Popup } from "semantic-ui-react";

import ReactTooltip from "react-tooltip";
import "react-medium-image-zoom/dist/styles.css";
import { withAlert } from "react-alert";

import moment from "moment";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import Head from "next/head";

import { handleAddToCart, fetchUserOrder } from "../../src/store/actions/cart";

import Footer from "../../src/components/Footer/Footer";

import "react-image-gallery/styles/css/image-gallery.css";
import { NotificationManager } from "react-notifications";
import Navigation from "../../src/components/Navigation";
import {
  openSideBarCart,
  closeSideBarCart,
} from "../../src/store/actions/cartSideBar";

// const
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { isMobile, isBrowser } from "react-device-detect";
import NavbarDetailsPage from "../../src/components/Navbar/NavbarDetailsPage";
import PopularProducts from "../../src/components/Products/NewProducts";
import Cart from "../../src/components/SideCart/Cart";
import { addToWish } from "../../src/store/actions/wishlist";
import mixpanel from "mixpanel-browser";
import RelatedProducts from "../../src/components/Products/RelatedProducts";

class DetailsPage extends Component {
  state = {
    size: "",
    activeImg: "",
    quantity: 1,
    sizeError: null,
    isMobile: null,
    isBrowser: null,

    photoIndex: 0,
    isOpen: false,
    images: [],
    index: 0,
    token: "",
    relatedProducts: [],
    relatedProductsError: "",
  };

  componentWillMount() {
    console.log("component will mount");
    axios.get("products/new-products");
    if (this.props.router) {
      this.setState({
        size: this.props.router.query.size,
      });
    }
  }

  componentDidMount() {
    // this.fetchRelatedProducts();
    axios.get("products/new-products");
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }

    mixpanel.init("1c4b3e842cad38093bba2bd16d1b14cf");
    mixpanel.track("Details Page Initiate");

    if (this.props.details.images) {
      this.props.details.images.map((img) => {
        const src = `${img.image}`;
        this.setState((state) => {
          const list = state.images.push(src);
        });
      });
    }
  }

  fetchRelatedProducts = () => {
    const data = {
      category: this.props.details.products.category,
    };
    axios
      .post("products/product-filter-category", {
        category: this.props.details.products.category,
      })
      .then((res) => {
        this.setState({
          relatedProducts: res.data.category_product_qs,
        });
      })
      .catch((err) => {
        this.setState({
          relatedProductsError: err.response.data,
        });
      });
  };

  componentWillUnmount() {
    this.props.closeSideBarCart();
  }

  handleAddToWish = (value) => {
    console.log(value);
    const data = {
      slug: value,
      alert: this.props.alert,
    };
    this.props.addToWish(data, this.props.alert);
  };

  captions = [
    <div className="product-deslaimer">
      <h5
        style={{
          color: "rgba(14,14,14,.67)",
          textTransform: "uppercase",
        }}
      >
        Disclaimer
      </h5>
      <div className="disclaimer-images">
        <div className="disclaimer-image">
          <img
            width="50px"
            height="50px"
            src="/images/iron.png"
            alt="Do not iron directly on prints."
          />
        </div>
        <div className="disclaimer-image">
          <img
            width="40px"
            height="40px"
            src="/images/washing-machine.png"
            alt="Do not iron directly on prints."
          />
        </div>
        <div className="disclaimer-image">
          <img
            width="50px"
            height="50px"
            src="/images/drying-clothes.png"
            alt="Do not iron directly on prints."
          />
        </div>
        <div className="disclaimer-image">
          <img
            width="50px"
            height="50px"
            src="/images/bleach.png"
            alt="Do not iron directly on prints."
          />
        </div>
        <div className="disclaimer-image">
          <img
            width="50px"
            height="50px"
            src="https://images.bewakoof.com/web/Do-not-wrink-2x-1528457334.png"
            alt="Do not iron directly on prints."
          />
        </div>
      </div>
    </div>,
  ];

  handleChangeSize = (e) => {
    //console.log(e.value);
    this.setState({
      size: e.target.value,
    });
  };

  onSubmitCart = (slug) => {
    this.setState({ sizeError: true });
    const data = {
      size: this.state.size,
      slug: slug,
      quantity: this.state.quantity,
    };

    //console.log(data);
    this.props.handleAddToCart(data);
    this.props.fetchUserOrder();
    mixpanel.track_links("#AddToCart", "Clicked Link");
    // this.props.openSideBar();
  };

  redirectToLogin = () => {
    //console.log("redirecting");
    this.props.router.push({
      pathname: "/user/login/",
      query: {
        redirectURL: this.props.router.asPath,
        size: this.state.size,
      },
      asPath: "main",
    });
  };

  handlePlusQuantity = () => {
    this.setState({ quantity: 1 + this.state.quantity });
  };

  handleMinusQuantity = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };
  handleShareButton = () => {
    // Check if navigator.share is supported by the browser
    if (navigator.share) {
      console.log("Congrats! Your browser supports Web Share API");
      navigator
        .share({
          title: `${this.props.details.products.name}`,
          title: `Check out ${this.props.details.products.name} on Proman Clothing`,
          url: document.location.href,
        })
        .then(() => {})
        .catch(() => {});
    } else {
      console.log("Sorry! Your browser does not support Web Share API");
    }
  };

  render() {
    const {
      details,
      data,
      loading,
      error,
      add_to_cart_success,
      new_qs,
      images,
    } = this.props;
    console.log("imagessssssssssssssssssss", this.state.relatedProducts);

    if (typeof window !== "undefined") {
      var token = localStorage.getItem("access_token");
    }

    // //console.log(token);

    var myDate = new Date(
      new Date().getTime() +
        details.products.product_delivery_time * 24 * 60 * 60 * 1000
    );

    const expected_delivery_date = moment(myDate).format("MMMM Do");
    const { photoIndex, isOpen } = this.state;

    return (
      <>
        <Head>
          <title className="text-capitalize">
            {details.products.name} |Proman Limited - Pure Men Fashion{" "}
          </title>
        </Head>
        <NavbarDetailsPage
          route={this.props.router.back}
          name={details.products.name.slice(0, 20)}
          isMobile={this.state.isMobile}
          slug={details.products.slug}
          closeSideBar={this.props.cartSideBarOpenTwo}
        />
        <ReactTooltip />
        {add_to_cart_success
          ? NotificationManager.success("success message")
          : ""}
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            imageCaption={this.captions[this.state.photoIndex]}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        {this.state.isMobile ? (
          <section className="shop single section">
            <div className="container">
              <div className="row mt-4">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      {/* Product Slider */}
                      <div className="product-gallery mt-4">
                        {/* Images slider */}
                        <div className="flexslider-thumbnails">
                          <div class="col-md-10">
                            {/* <ShareButton /> */}

                            <img
                              src={
                                this.state.activeImg
                                  ? this.state.activeImg
                                  : `${details.products.thumbnail}`
                              }
                              width="100%"
                              id="ProductImg"
                              onClick={() => this.setState({ isOpen: true })}
                            />
                            <button
                              onClick={this.handleShareButton}
                              className="share-button"
                              type="button"
                              title="Share this article"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 100 100"
                              >
                                <path d="M75 64c-4.8 0-9.1 2.3-11.8 5.8L38.9 55.7c1.5-3.7 1.5-7.8 0-11.5l24.3-14.1c2.7 3.5 7 5.8 11.8 5.8 8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15c0 2 .4 4 1.1 5.7L36.8 40.8C34 37.3 29.8 35 25 35c-8.3 0-15 6.7-15 15s6.7 15 15 15c4.8 0 9.1-2.3 11.8-5.8l24.3 14.1C60.4 75 60 77 60 79c0 8.3 6.7 15 15 15s15-6.7 15-15-6.7-15-15-15zm0-54c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11 4.9-11 11-11zM25 61c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11zm50 29c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z" />
                                <path
                                  fill="#00F"
                                  d="M1644-510v1684H-140V-510h1784m8-8H-148v1700h1800V-518z"
                                />
                              </svg>
                            </button>

                            <div class="small-imgs">
                              {details.images.map((i) => {
                                return (
                                  <img
                                    src={`${i.image}`}
                                    // width="60%"
                                    class="small-img"
                                    onClick={() =>
                                      this.setState({
                                        activeImg: `${i.image}`,
                                      })
                                    }
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        {/* End Images slider */}
                      </div>
                      <hr />
                      {/* End Product slider */}
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="product-des">
                        {/* Description */}
                        <div className="short">
                          <h4 className="text-capitalize">
                            {details.products.name}
                          </h4>
                          {/* <div className="rating-main">
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
                      <i className="fa fa-star-half-o" />
                    </li>
                    <li className="dark">
                      <i className="fa fa-star-o" />
                    </li>
                  </ul>
                  <a href="#" className="total-review">
                    (102) Review
                  </a>
                </div> */}
                          <div className="product-pricing">
                            {details.products.discount_price ? (
                              <>
                                <p className="price">
                                  <span className="discount">
                                    <img
                                      width="15px"
                                      height="15px"
                                      src="/images/taka.png"
                                    />
                                    {details.products.discount_price}
                                  </span>
                                  <s>
                                    <img
                                      width="15px"
                                      height="15px"
                                      src="/images/taka.png"
                                    />
                                    {details.products.price}
                                  </s>{" "}
                                  <h6 style={{ fontWeight: "normal" }}>
                                    Incl. taxes
                                  </h6>
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="price">
                                  {/* <span className="discount">$70.00</span> */}
                                  <s>
                                    <img
                                      width="15px"
                                      height="15px"
                                      src="/images/taka.png"
                                    />
                                    {details.products.discount_price}
                                  </s>{" "}
                                </p>
                                <h6>Incl. taxes</h6>
                              </>
                            )}
                          </div>
                          <div className="bogo-label-top">
                            {details.products.buy_one_get_one ? (
                              <div className="bogo-label">BUY 1 GET 1 FREE</div>
                            ) : (
                              ""
                            )}
                          </div>
                          {details.products.out_of_stock ? (
                            <div className="sellingFastWrapperForProduct">
                              <p>Out of stock</p>
                            </div>
                          ) : (
                            ""
                          )}

                          <hr />
                          <p className="description">
                            {details.products.short_desc}
                          </p>
                        </div>
                        {/*/ End Description */}
                        {/* Color */}
                        {/* <div className="color">
                <h4>
                  Available Options <span>Color</span>
                </h4>
                <ul>
                  <li>
                    <a href="#" className="one">
                      <i className="ti-check" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="two">
                      <i className="ti-check" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="three">
                      <i className="ti-check" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="four">
                      <i className="ti-check" />
                    </a>
                  </li>
                </ul>
              </div> */}
                        {/*/ End Color */}
                        {/* Size */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          className="size text-center"
                        >
                          <ul>
                            <h4 className="text-center">Available Size</h4>
                            {details.products.s_size && (
                              <li>
                                <a
                                  onClick={() => this.setState({ size: "s" })}
                                  value="s"
                                  style={{
                                    color:
                                      this.state.size === "s" ? "#39a6a3" : "",
                                    fontWeight:
                                      this.state.size === "s" ? "bolder" : "",
                                    borderRadius:
                                      this.state.size === "s" ? "20px" : "",
                                  }}
                                  className="one"
                                >
                                  S
                                </a>
                              </li>
                            )}

                            {details.products.m_size && (
                              <li>
                                <a
                                  onClick={() => this.setState({ size: "m" })}
                                  value="m"
                                  style={{
                                    color:
                                      this.state.size === "m" ? "#39a6a3" : "",
                                    fontWeight:
                                      this.state.size === "m" ? "bolder" : "",
                                    borderRadius:
                                      this.state.size === "m" ? "20px" : "",
                                  }}
                                  className="one"
                                >
                                  M
                                </a>
                              </li>
                            )}
                            {details.products.l_size && (
                              <li>
                                <a
                                  onClick={() => this.setState({ size: "l" })}
                                  value="l"
                                  style={{
                                    color:
                                      this.state.size === "l" ? "#39a6a3" : "",
                                    fontWeight:
                                      this.state.size === "l" ? "bolder" : "",
                                    borderRadius:
                                      this.state.size === "l" ? "20px" : "",
                                  }}
                                  className="one"
                                >
                                  L
                                </a>
                              </li>
                            )}
                            {details.products.xl_size && (
                              <li>
                                <a
                                  onClick={() => this.setState({ size: "xl" })}
                                  value="xl"
                                  className="one"
                                  style={{
                                    color:
                                      this.state.size === "xl" ? "#39a6a3" : "",
                                    fontWeight:
                                      this.state.size === "xl" ? "bolder" : "",
                                    borderRadius:
                                      this.state.size === "xl" ? "20px" : "",
                                  }}
                                >
                                  XL
                                </a>
                              </li>
                            )}
                            {details.products.xxl_size && (
                              <li>
                                <a
                                  onClick={() => this.setState({ size: "xxl" })}
                                  value="XXL"
                                  className="one"
                                  style={{
                                    color:
                                      this.state.size === "xxl"
                                        ? "#39a6a3"
                                        : "",
                                    fontWeight:
                                      this.state.size === "xxl" ? "bolder" : "",
                                    borderRadius:
                                      this.state.size === "xxl" ? "20px" : "",
                                  }}
                                >
                                  XXL
                                </a>
                              </li>
                            )}
                          </ul>
                        </div>
                        {/*/ End Size */}
                        {/* Product Buy */}
                        <div className="product-buy">
                          <div className="quantity">
                            <h6>Quantity :</h6>
                            {/* Input Order */}
                            <div className="input-group">
                              <div className="button minus">
                                {this.state.quantity !== 1 ? (
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-number"
                                    data-type="minus"
                                    data-field="quant[1]"
                                  >
                                    <i
                                      onClick={() => this.handleMinusQuantity()}
                                      className="ti-minus"
                                    />
                                  </button>
                                ) : (
                                  ""
                                )}
                              </div>
                              <input
                                type="text"
                                name="quant[5]"
                                className="input-number"
                                data-min={1}
                                data-max={20}
                                value={this.state.quantity}
                              />
                              <div className="button plus">
                                <button
                                  type="submit"
                                  className="btn btn-primary btn-number"
                                  data-type="plus"
                                  data-field="quant[1]"
                                >
                                  <i
                                    onClick={() =>
                                      this.handlePlusQuantity(details.id)
                                    }
                                    className="ti-plus"
                                  />
                                </button>
                              </div>
                            </div>
                            {/*/ End Input Order */}
                          </div>
                          {details.products.out_of_stock ? (
                            ""
                          ) : (
                            <div id="AddToCart" className="add-to-cart">
                              <span
                                data-tip="Specify Size"
                                data-tip-disable={
                                  this.state.size === "" ? false : true
                                }
                              >
                                <button
                                  id="AddToCart"
                                  data-tip
                                  data-for="registerTip"
                                  onClick={
                                    token === null
                                      ? () => this.redirectToLogin()
                                      : () =>
                                          this.onSubmitCart(
                                            details.products.slug
                                          )
                                  }
                                  className="btn"
                                  disabled={
                                    this.state.size === "" ? true : false
                                  }
                                >
                                  <p style={{ color: "white" }}>Add to cart</p>
                                </button>
                              </span>
                              <a
                                data-tip="Add To Wishlist"
                                // onClick={
                                onClick={
                                  token === null
                                    ? () => this.redirectToLogin()
                                    : () =>
                                        this.handleAddToWish(
                                          details.products.slug
                                        )
                                }
                                // }
                                className="btn min"
                              >
                                <i className="ti-heart" />
                              </a>
                              {/* <a href="#" className="btn min">
                                <i className="fa fa-compress" />
                              </a> */}
                            </div>
                          )}
                          <p className="cat text-capitalize">
                            Category :
                            <a href="#">{details.products.category}</a>
                          </p>
                          <p className="availability">
                            Availability : Few Products In Stock
                          </p>
                          <div className="details-page-more-details">
                            <img
                              width="40px"
                              height="40px"
                              src="/images/fast-delivery.png"
                            />
                            <p>
                              Order now to get delivery by{" "}
                              <strong>{expected_delivery_date}</strong>
                            </p>
                          </div>
                          <div className="details-page-more-details">
                            <img
                              width="40px"
                              height="40px"
                              src="/images/cash-on-delivery.png"
                            />
                            <p>Cash on Delivery is available.</p>
                          </div>
                        </div>
                        {/*/ End Product Buy */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="product-info">
                        <div className="nav-main">
                          {/* Tab Nav */}
                          <ul
                            className="nav nav-tabs"
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                data-toggle="tab"
                                href="#description"
                                role="tab"
                              >
                                Description
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#reviews"
                                role="tab"
                              >
                                Size Chart
                              </a>
                            </li>
                          </ul>
                          {/*/ End Tab Nav */}
                        </div>
                        <div className="tab-content" id="myTabContent">
                          {/* Description Tab */}
                          <div
                            className="tab-pane fade show active"
                            id="description"
                            role="tabpanel"
                          >
                            <div className="tab-single p-3">
                              <div className="row">
                                <div className="col-12">
                                  <div className="row">
                                    <div className="col-md-7 border-left">
                                      <div className="product-details-desktop">
                                        <div className="fitting-info">
                                          <h5
                                            style={{
                                              color: "rgba(14,14,14,.67)",
                                            }}
                                          >
                                            REGULAR FIT
                                          </h5>
                                          <p style={{ color: "#0e0e0eab" }}>
                                            Fits just right - not too tight, not
                                            too loose.
                                          </p>
                                        </div>
                                        <div className="desc-info">
                                          <h5
                                            style={{
                                              color: "rgba(14,14,14,.67)",
                                            }}
                                          >
                                            PRODUCT DESCRIPTION
                                          </h5>
                                          <p style={{ color: "#0e0e0eab" }}>
                                            Layer up this Winter season with
                                            Poman. <br />
                                            Style these cloth's with a pair of
                                            pants and sneakers for a smart look.
                                            <br />
                                            Ditch the heater, your outfit's
                                            gonna create enough heat!
                                          </p>
                                        </div>
                                        <div className="wash-info">
                                          <h5
                                            style={{
                                              color: "rgba(14,14,14,.67)",
                                            }}
                                          >
                                            100% PURE MERCELINE
                                          </h5>
                                          <p style={{ color: "#0e0e0eab" }}>
                                            Soft & Durable
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      style={{ padding: "40px" }}
                                      className="col-md-4"
                                    >
                                      <div className="product-deslaimer">
                                        <h5
                                          style={{
                                            color: "rgba(14,14,14,.67)",
                                            textTransform: "uppercase",
                                          }}
                                        >
                                          Disclaimer
                                        </h5>
                                        <div className="disclaimer-images">
                                          <div className="disclaimer-image">
                                            <Popup
                                              position="bottom center"
                                              content="Hello. This is an inverted popup"
                                              inverted
                                              trigger={
                                                <img
                                                  width="50px"
                                                  height="50px"
                                                  src="/images/iron.png"
                                                  alt="Do not iron directly on prints."
                                                />
                                              }
                                            ></Popup>
                                          </div>
                                          <div className="disclaimer-image">
                                            <Popup
                                              position="bottom center"
                                              content="Hello. This is an inverted popup"
                                              inverted
                                              trigger={
                                                <img
                                                  width="40px"
                                                  height="40px"
                                                  src="/images/washing-machine.png"
                                                  alt="Do not iron directly on prints."
                                                />
                                              }
                                            ></Popup>
                                          </div>
                                          <div className="disclaimer-image">
                                            <Popup
                                              position="bottom center"
                                              content="Hello. This is an inverted popup"
                                              inverted
                                              trigger={
                                                <img
                                                  width="50px"
                                                  height="50px"
                                                  src="/images/drying-clothes.png"
                                                  alt="Do not iron directly on prints."
                                                />
                                              }
                                            ></Popup>
                                          </div>
                                          <div className="disclaimer-image">
                                            <Popup
                                              position="bottom center"
                                              content="Hello. This is an inverted popup"
                                              inverted
                                              trigger={
                                                <img
                                                  width="50px"
                                                  height="50px"
                                                  src="/images/bleach.png"
                                                  alt="Do not iron directly on prints."
                                                />
                                              }
                                            ></Popup>
                                          </div>
                                          <div className="disclaimer-image">
                                            <Popup
                                              position="bottom center"
                                              content="Hello. This is an inverted popup"
                                              inverted
                                              trigger={
                                                <img
                                                  width="50px"
                                                  height="50px"
                                                  src="https://images.bewakoof.com/web/Do-not-wrink-2x-1528457334.png"
                                                  alt="Do not iron directly on prints."
                                                />
                                              }
                                            ></Popup>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*/ End Description Tab */}
                          {/* Reviews Tab */}
                          <div
                            className="tab-pane fade"
                            id="reviews"
                            role="tabpanel"
                          >
                            <div className="tab-single review-panel">
                              <div className="row">
                                <div className="col-12">
                                  <div className="size-chart-img">
                                    <img
                                      src="/images/WIDTH.png"
                                      alt="size-chart"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*/ End Reviews Tab */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="shop single section">
            <div className="container">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="">Details</Breadcrumb.Item>
                <Breadcrumb.Item active>
                  {details.products.name}
                </Breadcrumb.Item>
              </Breadcrumb>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      {/* Product Slider */}
                      <div className="product-gallery">
                        {/* Images slider */}
                        <div className="flexslider-thumbnails">
                          <div class="col-md-10">
                            {/* <Zoom> */}
                            <img
                              onClick={() => this.setState({ isOpen: true })}
                              src={
                                this.state.activeImg
                                  ? this.state.activeImg
                                  : `${details.products.thumbnail}`
                              }
                              width="100%"
                              id="ProductImg"
                            />
                            {/* </Zoom> */}

                            <div class="small-imgs">
                              {details.images.map((i) => {
                                return (
                                  <img
                                    src={`${i.image}`}
                                    // width="60%"
                                    class="small-img"
                                    onClick={() =>
                                      this.setState({
                                        activeImg: `${i.image}`,
                                      })
                                    }
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        {/* End Images slider */}
                      </div>
                      {/* End Product slider */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="product-des">
                        {/* Description */}
                        <div className="short">
                          <h4 className="text-capitalize">
                            {details.products.name}
                          </h4>
                          {/* <div className="rating-main">
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
                    <i className="fa fa-star-half-o" />
                  </li>
                  <li className="dark">
                    <i className="fa fa-star-o" />
                  </li>
                </ul>
                <a href="#" className="total-review">
                  (102) Review
                </a>
              </div> */}
                          {details.products.discount_price ? (
                            <>
                              <p className="price">
                                <span className="discount">
                                  <img
                                    width="15px"
                                    height="15px"
                                    src="/images/taka.png"
                                  />
                                  {details.products.discount_price}
                                </span>
                                <s>
                                  <img
                                    width="15px"
                                    height="15px"
                                    src="/images/taka.png"
                                  />
                                  {details.products.price}
                                </s>{" "}
                                <h6 style={{ fontWeight: "normal" }}>
                                  Incl. taxes
                                </h6>
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="price">
                                {/* <span className="discount">$70.00</span> */}
                                <s>
                                  <img
                                    width="15px"
                                    height="15px"
                                    src="/images/taka.png"
                                  />
                                  {details.products.discount_price}
                                </s>{" "}
                              </p>
                              <h6>Incl. taxes</h6>
                            </>
                          )}
                          <div className="bogo-label-top">
                            {details.products.buy_one_get_one ? (
                              <div className="bogo-label">BUY 1 GET 1 FREE</div>
                            ) : (
                              ""
                            )}
                          </div>
                          {details.products.out_of_stock ? (
                            <div className="sellingFastWrapperForProduct">
                              <p>Out of stock</p>
                            </div>
                          ) : (
                            ""
                          )}
                          <p className="description">
                            {details.products.short_desc}
                          </p>
                        </div>
                        {/*/ End Description */}
                        {/* Color */}
                        {/* <div className="color">
              <h4>
                Available Options <span>Color</span>
              </h4>
              <ul>
                <li>
                  <a href="#" className="one">
                    <i className="ti-check" />
                  </a>
                </li>
                <li>
                  <a href="#" className="two">
                    <i className="ti-check" />
                  </a>
                </li>
                <li>
                  <a href="#" className="three">
                    <i className="ti-check" />
                  </a>
                </li>
                <li>
                  <a href="#" className="four">
                    <i className="ti-check" />
                  </a>
                </li>
              </ul>
            </div> */}
                        {/*/ End Color */}
                        {/* Size */}
                        <div className="size">
                          <h4>Available Size</h4>
                          <ul>
                            {details.products.s_size && (
                              <li>
                                <a
                                  onClick={() => this.setState({ size: "s" })}
                                  value="s"
                                  style={{
                                    color:
                                      this.state.size === "s" ? "#39a6a3" : "",
                                    fontWeight:
                                      this.state.size === "s" ? "bolder" : "",
                                    borderRadius:
                                      this.state.size === "s" ? "20px" : "",
                                  }}
                                  className="one"
                                >
                                  S
                                </a>
                              </li>
                            )}

                            {details.products.m_size && (
                              <li>
                                <a
                                  onClick={() => this.setState({ size: "m" })}
                                  value="m"
                                  style={{
                                    color:
                                      this.state.size === "m" ? "#39a6a3" : "",
                                    fontWeight:
                                      this.state.size === "m" ? "bolder" : "",
                                    borderRadius:
                                      this.state.size === "m" ? "20px" : "",
                                  }}
                                  className="one"
                                >
                                  M
                                </a>
                              </li>
                            )}
                            {details.products.l_size && (
                              <li>
                                <a
                                  onClick={() => this.setState({ size: "l" })}
                                  value="l"
                                  style={{
                                    color:
                                      this.state.size === "l" ? "#39a6a3" : "",
                                    fontWeight:
                                      this.state.size === "l" ? "bolder" : "",
                                    borderRadius:
                                      this.state.size === "l" ? "20px" : "",
                                  }}
                                  className="one"
                                >
                                  L
                                </a>
                              </li>
                            )}
                            {details.products.xl_size && (
                              <li>
                                <a
                                  onClick={() => this.setState({ size: "xl" })}
                                  value="xl"
                                  className="one"
                                  style={{
                                    color:
                                      this.state.size === "xl" ? "#39a6a3" : "",
                                    fontWeight:
                                      this.state.size === "xl" ? "bolder" : "",
                                    borderRadius:
                                      this.state.size === "xl" ? "20px" : "",
                                  }}
                                >
                                  XL
                                </a>
                              </li>
                            )}
                            {details.products.xxl_size && (
                              <li>
                                <a
                                  onClick={() => this.setState({ size: "xxl" })}
                                  value="XXL"
                                  className="one"
                                  style={{
                                    color:
                                      this.state.size === "xxl"
                                        ? "#39a6a3"
                                        : "",
                                    fontWeight:
                                      this.state.size === "xxl" ? "bolder" : "",
                                    borderRadius:
                                      this.state.size === "xxl" ? "20px" : "",
                                  }}
                                >
                                  XXL
                                </a>
                              </li>
                            )}
                          </ul>
                        </div>
                        {/*/ End Size */}
                        {/* Product Buy */}
                        <div className="product-buy">
                          {this.props.details.products.buy_one_get_one ? (
                            ""
                          ) : (
                            <div className="quantity">
                              <h6>Quantity :</h6>
                              {/* Input Order */}
                              <div className="input-group">
                                <div className="button minus">
                                  {this.state.quantity !== 1 ? (
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-number"
                                      data-type="minus"
                                      data-field="quant[1]"
                                    >
                                      <i
                                        onClick={() =>
                                          this.handleMinusQuantity()
                                        }
                                        className="ti-minus"
                                      />
                                    </button>
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <input
                                  type="text"
                                  name="quant[5]"
                                  className="input-number"
                                  data-min={1}
                                  data-max={20}
                                  value={this.state.quantity}
                                />
                                <div className="button plus">
                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-number"
                                    data-type="plus"
                                    data-field="quant[1]"
                                  >
                                    <i
                                      onClick={() =>
                                        this.handlePlusQuantity(details.id)
                                      }
                                      className="ti-plus"
                                    />
                                  </button>
                                </div>
                              </div>
                              {/*/ End Input Order */}
                            </div>
                          )}
                          {details.products.out_of_stock ? (
                            ""
                          ) : (
                            <div id="AddToCart" className="add-to-cart">
                              <span
                                data-tip="Specify Size"
                                data-tip-disable={
                                  this.state.size === "" ? false : true
                                }
                              >
                                <button
                                  id="AddToCart"
                                  data-tip
                                  data-for="registerTip"
                                  onClick={
                                    token === null
                                      ? () => this.redirectToLogin()
                                      : () =>
                                          this.onSubmitCart(
                                            details.products.slug
                                          )
                                  }
                                  className="btn"
                                  disabled={
                                    this.state.size === "" ? true : false
                                  }
                                >
                                  <p style={{ color: "white" }}>Add to cart</p>
                                </button>
                              </span>
                              <a
                                data-tip="Add To Wishlist"
                                // onClick={
                                onClick={
                                  token === null
                                    ? () => this.redirectToLogin()
                                    : () =>
                                        this.handleAddToWish(
                                          details.products.slug
                                        )
                                }
                                // }
                                className="btn min"
                              >
                                <i className="ti-heart" />
                              </a>
                              {/* <a href="#" className="btn min">
                                <i className="fa fa-compress" />
                              </a> */}
                            </div>
                          )}

                          <p className="cat text-capitalize">
                            Category :
                            <a href="#">{details.products.category}</a>
                          </p>
                          <p className="availability">
                            Availability : 180 Products In Stock
                          </p>
                          <div className="details-page-more-details">
                            <img
                              width="40px"
                              height="40px"
                              src="/images/fast-delivery.png"
                            />
                            <p>
                              Order now to get delivery by{" "}
                              <strong>{expected_delivery_date}</strong>
                            </p>
                          </div>
                          <div className="details-page-more-details">
                            <img
                              width="40px"
                              height="40px"
                              src="/images/cash-on-delivery.png"
                            />
                            <p>Cash on Delivery is available.</p>
                          </div>
                        </div>
                        {/*/ End Product Buy */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="product-info">
                        <div className="nav-main">
                          {/* Tab Nav */}
                          <ul
                            className="nav nav-tabs"
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                data-toggle="tab"
                                href="#description"
                                role="tab"
                              >
                                Description
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#reviews"
                                role="tab"
                              >
                                Size Chart
                              </a>
                            </li>
                          </ul>
                          {/*/ End Tab Nav */}
                        </div>
                        <div className="tab-content" id="myTabContent">
                          {/* Description Tab */}
                          <div
                            className="tab-pane fade show active"
                            id="description"
                            role="tabpanel"
                          >
                            <div className="tab-single p-3">
                              <div className="row">
                                <div className="col-12">
                                  <div className="row">
                                    <div className="col-md-7 border-left">
                                      <div className="product-details-desktop">
                                        <div className="fitting-info">
                                          <h5
                                            style={{
                                              color: "rgba(14,14,14,.67)",
                                            }}
                                          >
                                            REGULAR FIT
                                          </h5>
                                          <p style={{ color: "#0e0e0eab" }}>
                                            Fits just right - not too tight, not
                                            too loose.
                                          </p>
                                        </div>
                                        <div className="desc-info">
                                          <h5
                                            style={{
                                              color: "rgba(14,14,14,.67)",
                                            }}
                                          >
                                            PRODUCT DESCRIPTION
                                          </h5>
                                          <p style={{ color: "#0e0e0eab" }}>
                                            Layer up this Winter season with
                                            Poman. <br />
                                            Style these cloth's with a pair of
                                            pants and sneakers for a smart look.
                                            <br />
                                            Ditch the heater, your outfit's
                                            gonna create enough heat!
                                          </p>
                                        </div>
                                        <div className="wash-info">
                                          <h5
                                            style={{
                                              color: "rgba(14,14,14,.67)",
                                            }}
                                          >
                                            100% PURE MERCELINE
                                          </h5>
                                          <p style={{ color: "#0e0e0eab" }}>
                                            Soft & Durable
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      style={{ padding: "40px" }}
                                      className="col-md-4"
                                    >
                                      <div className="product-deslaimer">
                                        <h5
                                          style={{
                                            color: "rgba(14,14,14,.67)",
                                            textTransform: "uppercase",
                                          }}
                                        >
                                          Disclaimer
                                        </h5>
                                        <div className="disclaimer-images">
                                          <div className="disclaimer-image">
                                            <Popup
                                              position="bottom center"
                                              content="Hello. This is an inverted popup"
                                              inverted
                                              trigger={
                                                <img
                                                  width="50px"
                                                  height="50px"
                                                  src="/images/iron.png"
                                                  alt="Do not iron directly on prints."
                                                />
                                              }
                                            ></Popup>
                                          </div>
                                          <div className="disclaimer-image">
                                            <Popup
                                              position="bottom center"
                                              content="Hello. This is an inverted popup"
                                              inverted
                                              trigger={
                                                <img
                                                  width="40px"
                                                  height="40px"
                                                  src="/images/washing-machine.png"
                                                  alt="Do not iron directly on prints."
                                                />
                                              }
                                            ></Popup>
                                          </div>
                                          <div className="disclaimer-image">
                                            <Popup
                                              position="bottom center"
                                              content="Hello. This is an inverted popup"
                                              inverted
                                              trigger={
                                                <img
                                                  width="50px"
                                                  height="50px"
                                                  src="/images/drying-clothes.png"
                                                  alt="Do not iron directly on prints."
                                                />
                                              }
                                            ></Popup>
                                          </div>
                                          <div className="disclaimer-image">
                                            <Popup
                                              position="bottom center"
                                              content="Hello. This is an inverted popup"
                                              inverted
                                              trigger={
                                                <img
                                                  width="50px"
                                                  height="50px"
                                                  src="/images/bleach.png"
                                                  alt="Do not iron directly on prints."
                                                />
                                              }
                                            ></Popup>
                                          </div>
                                          <div className="disclaimer-image">
                                            <Popup
                                              position="bottom center"
                                              content="Hello. This is an inverted popup"
                                              inverted
                                              trigger={
                                                <img
                                                  width="50px"
                                                  height="50px"
                                                  src="https://images.bewakoof.com/web/Do-not-wrink-2x-1528457334.png"
                                                  alt="Do not iron directly on prints."
                                                />
                                              }
                                            ></Popup>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*/ End Description Tab */}
                          {/* Reviews Tab */}
                          <div
                            className="tab-pane fade"
                            id="reviews"
                            role="tabpanel"
                          >
                            <div className="tab-single review-panel">
                              <div className="row">
                                <div className="col-12">
                                  <div className="size-chart-img">
                                    <img
                                      src="/images/WIDTH.png"
                                      alt="size-chart"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*/ End Reviews Tab */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <hr />
        {this.props.cartSideBarOpenTwo && (
          <Cart close={this.props.closeSideBarCart} />
        )}
        {/* <NotificationContainer  /> */}
        <RelatedProducts
          router={this.props.router}
          addToWish={this.props.addToWish}
          relatedProducts={this.props.relatedProducts.category_product_qs}
        />
        <PopularProducts
          router={this.props.router}
          addToWish={this.props.addToWish}
          newProducts={new_qs}
        />
        <Footer />
        <Navigation />
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const details_qs = await axios.get(`products/details/${context.params.slug}`);
  console.log(details_qs.data.products.category);
  const new_qs = await axios.get(`products/new-products`);

  const details = await details_qs.data;
  const newProducts = await new_qs.data;

  const related_qs = await axios.post("products/product-filter-category", {
    category: details_qs.data.products.category,
  });
  const relatedProducts = await related_qs.data;
  console.log("details =>", relatedProducts);

  const images = [];
  if (details.images) {
    details.images.map((img) => {
      const src = `${img.image}`;
      images.push(src);
    });
  }

  //console.log("images", images);

  if (!details) {
    return {
      props: {
        not_found: true,
      },
    };
  }
  // Pass data to the page via props
  return {
    props: {
      details: details,
      new_qs: newProducts,
      images: images,
      relatedProducts: relatedProducts,
    },
  };
}

const mapStateToProps = (state) => {
  return {
    data: state.cart.data,
    loading: state.cart.loading,
    error: state.cart.error,
    add_to_cart_success: state.cart.add_to_cart_success,
    cartSideBarOpenTwo: state.cartsidebar.sideOpen,
  };
};

export default connect(mapStateToProps, {
  handleAddToCart,
  fetchUserOrder,
  openSideBarCart,
  closeSideBarCart,
  addToWish,
})(withRouter(withAlert()(DetailsPage)));

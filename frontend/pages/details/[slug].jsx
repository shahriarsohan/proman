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
import SliderImageMobile from "../../src/components/SliderImage";
import Image from "next/image";
import MobileAddToCart from "./MobileAddTocart";

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
    showSizeGuide: false,
    img: [
      {
        image:
          "https://proman-media.s3.amazonaws.com/media/thumbnail/Relaxed_Fit_S_Hoodie.jpg",
        text: "img1",
      },
      {
        image:
          "https://proman-media.s3.amazonaws.com/media/product-details/WhatsApp_Image_2021-11-29_at_20.31.30.jpeg",
        text: "img2",
      },
      {
        image:
          "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg",
        text: "img3",
      },
    ],
  };

  componentWillMount() {
    // console.log("component will mount");
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
    // console.log(value);
    const data = {
      slug: value,
      alert: this.props.alert,
    };
    this.props.addToWish(data, this.props.alert);
  };

  // handleAddToWish = () => {
  //   this.setState({
  //     showSizeGuide: true,
  //   });
  // };

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
    alert(navigator.share);
    if (navigator.share) {
      // console.log("Congrats! Your browser supports Web Share API");
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

    console.log(this.state.size);

    if (typeof window !== "undefined") {
      var token = localStorage.getItem("access_token");
    }

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
                  <div className="row mb-4">
                    <div className="col-lg-6 col-12">
                      {/* Product Slider */}
                      <div className="product-gallery mt-4">
                        {/* Images slider */}
                        <SliderImageMobile
                          data={this.state.images}
                          // width="500px"
                          showDescription={false}
                          // direction="right"
                        />
                        {/* End Images slider */}
                      </div>
                      {/* <hr /> */}
                      {/* End Product slider */}
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="product-des">
                        {/* Description */}
                        <div className="short mb-4">
                          <div className="bogo-label-top">
                            {/* {details.products.buy_one_get_one ? ( */}
                            <div className="bogo-label">FREE SHIPPING</div>
                            {/* ) : (
                              ""
                            )} */}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <h4
                              style={{ fontSize: "16px" }}
                              className="text-capitalize"
                            >
                              {details.products.name}
                            </h4>
                            <div className="share">
                              <Image
                                onClick={this.handleShareButton}
                                height="20px"
                                width="20px"
                                src="/images/share.png"
                              ></Image>
                            </div>
                          </div>

                          <div
                            style={{
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                            className="d-flex"
                          >
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
                                    <h6
                                      style={{
                                        fontWeight: "normal",
                                        fontSize: "12px",
                                        color: "#7f7f7f",
                                      }}
                                    >
                                      Inclusive of taxes
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
                            <div className="rating-main">
                              <ul className="rating">
                                <li>
                                  <img
                                    height="15px"
                                    width="15px"
                                    src="https://images.bewakoof.com/web/fill-1-2x-1622112875.webp"
                                  />
                                </li>
                                <li>
                                  <img
                                    height="15px"
                                    width="15px"
                                    src="https://images.bewakoof.com/web/fill-1-2x-1622112875.webp"
                                  />
                                </li>
                                <li>
                                  <img
                                    height="15px"
                                    width="15px"
                                    src="https://images.bewakoof.com/web/fill-1-2x-1622112875.webp"
                                  />
                                </li>
                                <li>
                                  <img
                                    height="15px"
                                    width="15px"
                                    src="https://images.bewakoof.com/web/fill-1-2x-1622112875.webp"
                                  />
                                </li>
                                <li>
                                  <img
                                    height="15px"
                                    width="15px"
                                    src="https://images.bewakoof.com/web/fill-1-2x-1622112875.webp"
                                  />
                                </li>
                              </ul>
                              <a href="#" className="total-review">
                                (0) Review
                              </a>
                            </div>
                          </div>

                          {details.products.out_of_stock ? (
                            <div className="sellingFastWrapperForProduct">
                              <p>Out of stock</p>
                            </div>
                          ) : (
                            ""
                          )}

                          {/* <p className="description">
                            {details.products.short_desc}
                          </p> */}
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
                        {/* <div
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
                        </div> */}
                        {/* <hr /> */}
                        <div className="hr-line"></div>
                        <div className="mb-4 mt-4">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            className="size-head"
                          >
                            <p>Select size</p>
                            <p className="sizeChart">Size Guide</p>
                          </div>
                          <div className="size-list">
                            {this.state.size == "s" ? (
                              <div
                                onClick={() => this.setState({ size: "s" })}
                                className="eachSize eachSizeV3 activeSizeV3"
                              >
                                <span style={{ border: "none" }}>S</span>
                              </div>
                            ) : (
                              <div
                                onClick={() => this.setState({ size: "s" })}
                                className={`${
                                  details.products.s_size
                                    ? "eachSize eachSizeV3"
                                    : "eachSize eachSizeV3 disableSize disableSizeV3"
                                }`}
                              >
                                <span style={{ border: "none" }}>S</span>
                              </div>
                            )}
                            {this.state.size == "m" ? (
                              <div
                                onClick={() => this.setState({ size: "m" })}
                                className="eachSize eachSizeV3 activeSizeV3"
                              >
                                <span style={{ border: "none" }}>M</span>
                              </div>
                            ) : (
                              <div
                                onClick={() => this.setState({ size: "m" })}
                                className={`${
                                  details.products.m_size
                                    ? "eachSize eachSizeV3"
                                    : "eachSize eachSizeV3 disableSize disableSizeV3"
                                }`}
                              >
                                <span style={{ border: "none" }}>M</span>
                              </div>
                            )}
                            {/* <div
                              onClick={() => this.setState({ size: "m" })}
                              className="eachSize eachSizeV3 activeSizeV3"
                            >
                              <span style={{ border: "none" }}>M</span>
                            </div> */}
                            {this.state.size == "l" ? (
                              <div
                                onClick={() => this.setState({ size: "l" })}
                                className="eachSize eachSizeV3 activeSizeV3"
                              >
                                <span style={{ border: "none" }}>L</span>
                              </div>
                            ) : (
                              <div
                                onClick={() => this.setState({ size: "l" })}
                                className={`${
                                  details.products.l_size
                                    ? "eachSize eachSizeV3"
                                    : "eachSize eachSizeV3 disableSize disableSizeV3"
                                }`}
                              >
                                <span style={{ border: "none" }}>L</span>
                              </div>
                            )}
                            {this.state.size == "xl" ? (
                              <div
                                onClick={() => this.setState({ size: "xl" })}
                                className="eachSize eachSizeV3 activeSizeV3"
                              >
                                <span style={{ border: "none" }}>XL</span>
                              </div>
                            ) : (
                              <div
                                onClick={() => this.setState({ size: "xl" })}
                                className={`${
                                  details.products.xl_size
                                    ? "eachSize eachSizeV3"
                                    : "eachSize eachSizeV3 disableSize disableSizeV3"
                                }`}
                              >
                                <span style={{ border: "none" }}>XL</span>
                              </div>
                            )}
                            {this.state.size == "xxl" ? (
                              <div
                                onClick={() => this.setState({ size: "xxl" })}
                                className="eachSize eachSizeV3 activeSizeV3"
                              >
                                <span style={{ border: "none" }}>2XL</span>
                              </div>
                            ) : (
                              <div
                                onClick={() => this.setState({ size: "xxl" })}
                                className={`${
                                  details.products.xxl_size
                                    ? "eachSize eachSizeV3"
                                    : "eachSize eachSizeV3 disableSize disableSizeV3"
                                }`}
                              >
                                <span style={{ border: "none" }}>2XL</span>
                              </div>
                            )}
                            {/* <div
                              onClick={() => this.setState({ size: "3xl" })}
                              className="eachSize eachSizeV3 disableSize disableSizeV3"
                            >
                              <span style={{ border: "none" }}>3XL</span>
                            </div> */}
                          </div>
                          {this.state.size == "m" ? (
                            <div className="garmentDetailsV3 d-flex">
                              <p className="garmentType">Garment: </p>
                              <ul className="specification d-flex">
                                <p className="specificationName">
                                  Chest (Inch)
                                </p>
                                <p>38.0</p>
                              </ul>
                              <ul className="specification d-flex">
                                <p className="specificationName">
                                  Front Length (Inch)
                                </p>
                                <p>27</p>
                              </ul>
                              <ul className="specification d-flex">
                                <p className="specificationName">
                                  Sleeve Length (Inch)
                                </p>
                                <p>11</p>
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                          {this.state.size == "l" ? (
                            <div className="garmentDetailsV3 d-flex">
                              <p className="garmentType">Garment: </p>
                              <ul className="specification d-flex">
                                <p className="specificationName">
                                  Chest (Inch)
                                </p>
                                <p>40.0</p>
                              </ul>
                              <ul className="specification d-flex">
                                <p className="specificationName">
                                  Front Length (Inch)
                                </p>
                                <p>29</p>
                              </ul>
                              <ul className="specification d-flex">
                                <p className="specificationName">
                                  Sleeve Length (Inch)
                                </p>
                                <p>13</p>
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                          {this.state.size == "xl" ? (
                            <div className="garmentDetailsV3 d-flex">
                              <p className="garmentType">Garment: </p>
                              <ul className="specification d-flex">
                                <p className="specificationName">
                                  Chest (Inch)
                                </p>
                                <p>42.0</p>
                              </ul>
                              <ul className="specification d-flex">
                                <p className="specificationName">
                                  Front Length (Inch)
                                </p>
                                <p>29</p>
                              </ul>
                              <ul className="specification d-flex">
                                <p className="specificationName">
                                  Sleeve Length (Inch)
                                </p>
                                <p>13</p>
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="hr-line"></div>

                        {/*/ End Size */}
                        {/* Product Buy */}
                        <div className="product-buy mt-4">
                          {/* <div className="quantity">
                            <h6>Quantity :</h6>
                            Input Order
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
                          </div> */}

                          <p className="cat text-capitalize">
                            Category :
                            <a href="#">{details.products.category}</a>
                          </p>
                          <p className="availability">
                            Availability : Few Products In Stock
                          </p>
                          <div>
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
                        </div>
                        {/*/ End Product Buy */}
                      </div>
                    </div>
                  </div>
                  <div className="hr-line"></div>
                  <div className="row mt-4 mb-4">
                    <div className="col-12">
                      <div>
                        <div className="tab-content" id="myTabContent">
                          {/* Description Tab */}
                          <div
                            className="tab-pane fade show active"
                            id="description"
                            role="tabpanel"
                          >
                            <div className="tab-single">
                              <div className="row">
                                <div className="col-12">
                                  <div className="row">
                                    <div className="col-md-7 border-left">
                                      <div className="product-details-desktop">
                                        <div className="fitting-info">
                                          <div className="d-flex">
                                            <div className="desc-img">
                                              <img
                                                height="50px"
                                                width="50px"
                                                src="https://images.bewakoof.com/web/Product-Description-2x-1528372223.png"
                                              ></img>
                                            </div>
                                            <div className="desc_more">
                                              <h5 className="desHead">
                                                PRODUCT DESCRIPTION
                                              </h5>
                                              <p style={{ color: "#0e0e0eab" }}>
                                                Layer up this Winter season with
                                                Proman. Style <br />
                                                these cloth's with a pair of
                                                pants and sneakers <br /> for a
                                                smart look. Ditch the heater,
                                                your outfit's <br /> gonna
                                                create enough heat!
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="fitting-info">
                                          <div className="d-flex">
                                            <div className="desc-img">
                                              <img
                                                height="50px"
                                                width="50px"
                                                src="https://images.bewakoof.com/web/Fit-2x-1528372220.png"
                                              ></img>
                                            </div>
                                            <div className="desc_more">
                                              <h5 className="desHead">
                                                RELAXED FIT
                                              </h5>
                                              <p style={{ color: "#0e0e0eab" }}>
                                                Fits just right - not too tight,
                                                not too loose.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="fitting-info">
                                          <div
                                            style={{ alignItems: "center" }}
                                            className="d-flex"
                                          >
                                            <div className="desc-img">
                                              <img
                                                height="50px"
                                                width="50px"
                                                src="https://images.bewakoof.com/web/Fabric-2x-1528372219.png"
                                              ></img>
                                            </div>
                                            <div className="desc_more">
                                              <h5 className="desHead">
                                                100% PURE MERCELINE
                                              </h5>
                                              <p style={{ color: "#0e0e0eab" }}>
                                                Soft & Durable
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="fitting-info">
                                          <div
                                            style={{ alignItems: "center" }}
                                            className="d-flex"
                                          >
                                            <div className="desc-img">
                                              <img
                                                height="50px"
                                                width="50px"
                                                src="https://images.bewakoof.com/web/Returns-happy-2x-1528372224.png"
                                              ></img>
                                            </div>
                                            <div className="desc_more">
                                              <h5 className="desHead">
                                                3 DAY RETURNS & EXCHANGE
                                              </h5>
                                              <p style={{ color: "#0e0e0eab" }}>
                                                Easy returns upto 15 days of
                                                delivery.
                                                <br /> Exchange available on
                                                select pincodes
                                              </p>
                                            </div>
                                          </div>
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
                  <div className="hr-line"></div>
                </div>
              </div>
              <div className="row review_area">
                <div className="desc-tab-wrpr col-xs-11">
                  <div className="element col-xs-6 selected">
                    <span>PRODUCT REVIEWS</span>
                  </div>
                  <div className="element col-xs-6">
                    <span>BRAND REVIEWS</span>
                  </div>
                </div>
                <div className="ratings-wrapper">
                  <div className="ratings">
                    <div className="ratingWrpr">
                      <span className="rtng">5.0</span>
                      <div className="total-ratings">
                        <p>Based on</p>
                        <p>0 ratings and 0 reviews</p>
                      </div>
                    </div>
                    <div className="rateBtn">RATE</div>
                  </div>
                  <div className="recommendText">
                    <div className="thumbsIcon">
                      <img src="https://images.bewakoof.com/web/bitmap-2x-1622112874.webp" />
                    </div>
                    <p className="percentageText ml-2">100%</p>
                    <p className="percentage">
                      of customers recommend this product
                    </p>
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
                        <SliderImageMobile data={this.state.images} />
                        {/* End Images slider */}
                      </div>
                      {/* End Product slider */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 ">
                      <div style={{ width: "80%" }} className="product-des">
                        {/* Description */}
                        <div className="short">
                          <h4 className="text-capitalize desh_h4">
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
                            {/* {details.products.buy_one_get_one ? ( */}
                            <div className="bogo-label">FREE SHIPPING</div>
                            {/* ) : (
                            ""
                          )} */}
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
                        <div style={{ width: "70%" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            className="size-head"
                          >
                            <p>Select size</p>
                            <p className="sizeChart">Size Guide</p>
                          </div>
                          <div className="size-list-desktop">
                            {this.state.size == "s" ? (
                              <div
                                onClick={() => this.setState({ size: "s" })}
                                className="eachSize eachSizeV3 activeSizeV3"
                              >
                                <span style={{ border: "none" }}>S</span>
                              </div>
                            ) : (
                              <div
                                onClick={() => this.setState({ size: "s" })}
                                className={`${
                                  details.products.s_size
                                    ? "eachSize eachSizeV3"
                                    : "eachSize eachSizeV3 disableSize disableSizeV3"
                                }`}
                              >
                                <span style={{ border: "none" }}>S</span>
                              </div>
                            )}
                            {this.state.size == "m" ? (
                              <div
                                onClick={() => this.setState({ size: "m" })}
                                className="eachSize eachSizeV3 activeSizeV3"
                              >
                                <span style={{ border: "none" }}>M</span>
                              </div>
                            ) : (
                              <div
                                onClick={() => this.setState({ size: "m" })}
                                className={`${
                                  details.products.m_size
                                    ? "eachSize eachSizeV3"
                                    : "eachSize eachSizeV3 disableSize disableSizeV3"
                                }`}
                              >
                                <span style={{ border: "none" }}>M</span>
                              </div>
                            )}
                            {/* <div
                              onClick={() => this.setState({ size: "m" })}
                              className="eachSize eachSizeV3 activeSizeV3"
                            >
                              <span style={{ border: "none" }}>M</span>
                            </div> */}
                            {this.state.size == "l" ? (
                              <div
                                onClick={() => this.setState({ size: "l" })}
                                className="eachSize eachSizeV3 activeSizeV3"
                              >
                                <span style={{ border: "none" }}>L</span>
                              </div>
                            ) : (
                              <div
                                onClick={() => this.setState({ size: "l" })}
                                className={`${
                                  details.products.l_size
                                    ? "eachSize eachSizeV3"
                                    : "eachSize eachSizeV3 disableSize disableSizeV3"
                                }`}
                              >
                                <span style={{ border: "none" }}>L</span>
                              </div>
                            )}
                            {this.state.size == "xl" ? (
                              <div
                                onClick={() => this.setState({ size: "xl" })}
                                className="eachSize eachSizeV3 activeSizeV3"
                              >
                                <span style={{ border: "none" }}>XL</span>
                              </div>
                            ) : (
                              <div
                                onClick={() => this.setState({ size: "xl" })}
                                className={`${
                                  details.products.xl_size
                                    ? "eachSize eachSizeV3"
                                    : "eachSize eachSizeV3 disableSize disableSizeV3"
                                }`}
                              >
                                <span style={{ border: "none" }}>XL</span>
                              </div>
                            )}
                            {this.state.size == "xxl" ? (
                              <div
                                onClick={() => this.setState({ size: "xxl" })}
                                className="eachSize eachSizeV3 activeSizeV3"
                              >
                                <span style={{ border: "none" }}>2XL</span>
                              </div>
                            ) : (
                              <div
                                onClick={() => this.setState({ size: "xxl" })}
                                className={`${
                                  details.products.xxl_size
                                    ? "eachSize eachSizeV3"
                                    : "eachSize eachSizeV3 disableSize disableSizeV3"
                                }`}
                              >
                                <span style={{ border: "none" }}>2XL</span>
                              </div>
                            )}
                            {/* <div
                              onClick={() => this.setState({ size: "3xl" })}
                              className="eachSize eachSizeV3 disableSize disableSizeV3"
                            >
                              <span style={{ border: "none" }}>3XL</span>
                            </div> */}
                          </div>
                        </div>
                        {this.state.size == "m" ? (
                          <div className="garmentDetailsV3 d-flex">
                            <p className="garmentType">Garment: </p>
                            <ul className="specification d-flex">
                              <p className="specificationName">Chest (Inch)</p>
                              <p>38.0</p>
                            </ul>
                            <ul className="specification d-flex">
                              <p className="specificationName">
                                Front Length (Inch)
                              </p>
                              <p>27</p>
                            </ul>
                            <ul className="specification d-flex">
                              <p className="specificationName">
                                Sleeve Length (Inch)
                              </p>
                              <p>11</p>
                            </ul>
                          </div>
                        ) : (
                          ""
                        )}
                        {this.state.size == "l" ? (
                          <div className="garmentDetailsV3 d-flex">
                            <p className="garmentType">Garment: </p>
                            <ul className="specification d-flex">
                              <p className="specificationName">Chest (Inch)</p>
                              <p>40.0</p>
                            </ul>
                            <ul className="specification d-flex">
                              <p className="specificationName">
                                Front Length (Inch)
                              </p>
                              <p>29</p>
                            </ul>
                            <ul className="specification d-flex">
                              <p className="specificationName">
                                Sleeve Length (Inch)
                              </p>
                              <p>13</p>
                            </ul>
                          </div>
                        ) : (
                          ""
                        )}
                        {this.state.size == "xl" ? (
                          <div className="garmentDetailsV3 d-flex">
                            <p className="garmentType">Garment: </p>
                            <ul className="specification d-flex">
                              <p className="specificationName">Chest (Inch)</p>
                              <p>42.0</p>
                            </ul>
                            <ul className="specification d-flex">
                              <p className="specificationName">
                                Front Length (Inch)
                              </p>
                              <p>29</p>
                            </ul>
                            <ul className="specification d-flex">
                              <p className="specificationName">
                                Sleeve Length (Inch)
                              </p>
                              <p>13</p>
                            </ul>
                          </div>
                        ) : (
                          ""
                        )}
                        {/*/ End Size */}
                        {/* Product Buy */}
                        <div className="product-buy">
                          {/* {this.props.details.products.buy_one_get_one ? (
                            ""
                          ) : (
                            <div className="quantity">
                              <h6>Quantity :</h6>
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
                            </div>
                          )} */}
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
                                    this.state.size === undefined ? true : false
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
                                            Proman. <br />
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
        <MobileAddToCart
          token={token}
          slug={details.products.slug}
          onSubmitCart={this.onSubmitCart}
          redirectToLogin={this.redirectToLogin}
          handleAddToWish={this.handleAddToWish}
          size={this.state.size}
        />
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const details_qs = await axios.get(`products/details/${context.params.slug}`);
  // console.log(details_qs.data.products.category);
  const new_qs = await axios.get(`products/new-products`);

  const details = await details_qs.data;
  const newProducts = await new_qs.data;

  const related_qs = await axios.post("products/product-filter-category", {
    category: details_qs.data.products.category,
  });
  const relatedProducts = await related_qs.data;
  // console.log("details =>", relatedProducts);

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

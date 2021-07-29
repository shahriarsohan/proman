import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "next/router";

import ReactTooltip from "react-tooltip";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import moment from "moment";

import { handleAddToCart, fetchUserOrder } from "../../src/store/actions/cart";

import NavbarTwo from "../../src/components/Navbar/NavbarTwo";
import Footer from "../../src/components/Footer/Footer";

import "react-image-gallery/styles/css/image-gallery.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Navigation from "../../src/components/Navigation";
import Cart from "../../src/components/SideCart/Cart";
import { openSideBar, closeSideBar } from "../../src/store/actions/cartSideBar";
// const

class DetailsPage extends Component {
  state = {
    size: "",
    activeImg: `http://127.0.0.1:8000${this.props.details.images[0].image}`,
    quantity: 1,
    sizeError: null,
  };

  handleChangeSize = (e) => {
    console.log(e.value);
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

    console.log(data);
    this.props.handleAddToCart(data);
    this.props.fetchUserOrder();
    this.props.openSideBar();
  };

  handlePlusQuantity = () => {
    this.setState({ quantity: 1 + this.state.quantity });
  };

  handleMinusQuantity = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };

  render() {
    const { details, data, loading, error, add_to_cart_success } = this.props;
    console.log(add_to_cart_success);
    console.log(this.state.sizeError);
    console.log(details);
    console.log(this.state.activeImg);

    var myDate = new Date(
      new Date().getTime() +
        details.products.product_delivery_time * 24 * 60 * 60 * 1000
    );

    console.log(myDate);

    const expected_delivery_date = moment(myDate).format("MMMM Do");

    return (
      <>
        <NavbarTwo />
        <ReactTooltip />
        {add_to_cart_success
          ? NotificationManager.success("success message")
          : ""}

        <section className="shop single section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    {/* Product Slider */}
                    <div className="product-gallery">
                      {/* Images slider */}
                      <div className="flexslider-thumbnails">
                        <div class="col-md-10">
                          <Zoom>
                            <img
                              src={this.state.activeImg}
                              width="100%"
                              id="ProductImg"
                            />
                          </Zoom>

                          <div class="small-imgs">
                            {details.images.map((i) => {
                              return (
                                <img
                                  src={`http://127.0.0.1:8000${i.image}`}
                                  width="80%"
                                  class="small-img"
                                  onClick={() =>
                                    this.setState({
                                      activeImg: `http://127.0.0.1:8000${i.image}`,
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
                        {details.products.discount_price ? (
                          <p className="price">
                            <span className="discount">$70.00</span>
                            <s>$80.00</s>{" "}
                          </p>
                        ) : (
                          <p className="price">
                            {/* <span className="discount">$70.00</span> */}
                            <s>$80.00</s>{" "}
                          </p>
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
                                    this.state.size === "xxl" ? "#39a6a3" : "",
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
                        <div className="add-to-cart">
                          <span
                            data-tip="Specify Size"
                            data-tip-disable={
                              this.state.size === "" ? false : true
                            }
                          >
                            <button
                              data-tip
                              data-for="registerTip"
                              onClick={() =>
                                this.onSubmitCart(details.products.slug)
                              }
                              className="btn"
                              disabled={this.state.size === "" ? true : false}
                            >
                              <p style={{ color: "white" }}>Add to cart</p>
                            </button>
                          </span>
                          <a
                            data-tip="Add To Wishlist"
                            href="#"
                            className="btn min"
                          >
                            <i className="ti-heart" />
                          </a>
                          <a href="#" className="btn min">
                            <i className="fa fa-compress" />
                          </a>
                        </div>
                        <p className="cat text-capitalize">
                          Category :<a href="#">{details.products.category}</a>
                        </p>
                        <p className="availability">
                          Availability : 180 Products In Stock
                        </p>
                        <div className="details-page-more-details">
                          <img
                            width="20px"
                            height="20px"
                            src="/images/icons8-delivery.gif"
                          />
                          <p>
                            Order now to get delivery by{" "}
                            <strong>{expected_delivery_date}</strong>
                          </p>
                        </div>
                        <div className="details-page-more-details">
                          <img
                            width="20px"
                            height="20px"
                            src="/images/icons8-cash-in-hand-90.png"
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
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
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
                              Reviews
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
                                <div className="single-des">
                                  <p>
                                    PRODUCT DESCRIPTION Get your Cattitude on
                                    fleek with this Purrfect Cat Women's
                                    Boyfriend T-shirt. Pair this Tee with high
                                    waste denims and boots for a chic look. Add
                                    sunglasses for glam. Country of Origin :
                                    India
                                  </p>
                                </div>
                                <div className="single-des">
                                  <p>
                                    Suspendisse consequatur voluptates lorem
                                    nobis accumsan natus mattis. Optio pede,
                                    optio qui metus, delectus! Ultricies
                                    impedit, minus tempor fuga, quasi, pede
                                    felis commodo bibendum voluptas nisi?
                                    Voluptatem risus tempore tempora. Quaerat
                                    aspernatur? Error praesent laoreet, cras in
                                    fames hac ea, massa montes diamlorem nec
                                    quaerat, quos occaecati leo nam aliquet
                                    corporis, ab recusandae parturient, etiam
                                    fermentum, a quasi possimus commodi, mollis
                                    voluptate mauris mollis, quisque donec
                                  </p>
                                </div>
                                <div className="single-des">
                                  <h4>Product Features:</h4>
                                  <ul>
                                    <li>long established fact.</li>
                                    <li>
                                      has a more-or-less normal distribution.{" "}
                                    </li>
                                    <li>lmany variations of passages of. </li>
                                    <li>generators on the Interne.</li>
                                  </ul>
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
                                <div className="ratting-main">
                                  <div className="avg-ratting">
                                    <h4>
                                      4.5 <span>(Overall)</span>
                                    </h4>
                                    <span>Based on 1 Comments</span>
                                  </div>
                                  {/* Single Rating */}
                                  <div className="single-rating">
                                    {/* <div className="rating-author">
                                      <img
                                        src="https://via.placeholder.com/200x200"
                                        alt="#"
                                      />
                                    </div> */}
                                    <div className="rating-des">
                                      <h6>Naimur Rahman</h6>
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
                                            <i className="fa fa-star-half-o" />
                                          </li>
                                          <li>
                                            <i className="fa fa-star-o" />
                                          </li>
                                        </ul>
                                        <div className="rate-count">
                                          (<span>3.5</span>)
                                        </div>
                                      </div>
                                      <p>
                                        Duis tincidunt mauris ac aliquet congue.
                                        Donec vestibulum consequat cursus.
                                        Aliquam pellentesque nulla dolor, in
                                        imperdiet.
                                      </p>
                                    </div>
                                  </div>
                                  {/*/ End Single Rating */}
                                  {/* Single Rating */}
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
          {this.props.cartSideBarOpenTwo && (
            <Cart close={this.props.closeSideBar} />
          )}
        </section>

        {/* <NotificationContainer /> */}
        <Footer />
        <Navigation />
      </>
    );
  }
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const details_qs = await axios.get(
    `http://127.0.0.1:8000/v1/products/details/${context.params.slug}`
  );

  const details = await details_qs.data;
  console.log(details);

  if (!details) {
    return {
      props: {
        not_found: true,
      },
    };
  }
  // Pass data to the page via props
  return {
    props: { details: details },
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
  openSideBar,
  closeSideBar,
})(withRouter(DetailsPage));

import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "next/router";

import { GlassMagnifier } from "react-image-magnifiers";
import ReactTooltip from "react-tooltip";

import { handleAddToCart, fetchUserOrder } from "../../src/store/actions/cart";

import NavbarTwo from "../../src/components/Navbar/NavbarTwo";
import Footer from "../../src/components/Footer/Footer";

import "react-image-gallery/styles/css/image-gallery.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
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
                    <div id="content">
                      <div id="featured_img">
                        <GlassMagnifier
                          imageSrc={this.state.activeImg}
                          imageAlt="Example"
                        />
                      </div>

                      <div id="thumb_img" className="cf">
                        {details.images.map((img) => {
                          return (
                            <figure onMouseMove={() => console.log("hello")}>
                              <img
                                className="active hover-zoom"
                                onClick={() =>
                                  this.setState({
                                    activeImg: `http://127.0.0.1:8000${img.image}`,
                                  })
                                }
                                src={`http://127.0.0.1:8000${img.image}`}
                              />
                            </figure>
                          );
                        })}
                      </div>
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
                        <div className="rating-main">
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
                              <i className="fa fa-star" />
                            </li>
                            {/* <li>
                              <i className="fa fa-star-half-o" />
                            </li>
                            <li className="dark">
                              <i className="fa fa-star-o" />
                            </li> */}
                          </ul>
                          <a href="#" className="total-review">
                            (0) Review
                          </a>
                        </div>
                        <p className="price">
                          <span className="discount">
                            {details.products.discount_price
                              ? `৳ ${details.products.discount_price}`
                              : ""}
                          </span>
                          <s>
                            {details.products.price
                              ? `৳ ${details.products.price}`
                              : ""}
                          </s>{" "}
                        </p>

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
                        <p className="cat">
                          Category :<a href="#">Clothing</a>
                        </p>
                        <p className="availability">
                          Availability : 180 Products In Stock
                        </p>
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
                          {/* <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#reviews"
                              role="tab"
                            >
                              Reviews
                            </a>
                          </li> */}
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
                          <div className="tab-single">
                            <div className="row">
                              <div className="col-12">
                                <div className="single-des">
                                  <p>
                                    simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer
                                    took a galley of type and scrambled it to
                                    make a type specimen book. It has survived
                                    not only five centuries, but also the leap
                                    into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with deskto
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
                                    <div className="rating-author">
                                      <img
                                        src="https://via.placeholder.com/200x200"
                                        alt="#"
                                      />
                                    </div>
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
                                  <div className="single-rating">
                                    <div className="rating-author">
                                      <img
                                        src="https://via.placeholder.com/200x200"
                                        alt="#"
                                      />
                                    </div>
                                    <div className="rating-des">
                                      <h6>Advin Geri</h6>
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
                                            <i className="fa fa-star" />
                                          </li>
                                        </ul>
                                        <div className="rate-count">
                                          (<span>5.0</span>)
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
                                </div>
                                {/* Review */}
                                <div className="comment-review">
                                  <div className="add-review">
                                    <h5>Add A Review</h5>
                                    <p>
                                      Your email address will not be published.
                                      Required fields are marked
                                    </p>
                                  </div>
                                  <h4>Your Rating</h4>
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
                                          <i className="fa fa-star" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                {/*/ End Review */}
                                {/* Form */}
                                <form
                                  className="form"
                                  method="post"
                                  action="mail/mail.php"
                                >
                                  <div className="row">
                                    <div className="col-lg-6 col-12">
                                      <div className="form-group">
                                        <label>
                                          Your Name<span>*</span>
                                        </label>
                                        <input
                                          type="text"
                                          name="name"
                                          required="required"
                                          placeholder
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                      <div className="form-group">
                                        <label>
                                          Your Email<span>*</span>
                                        </label>
                                        <input
                                          type="email"
                                          name="email"
                                          required="required"
                                          placeholder
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-12">
                                      <div className="form-group">
                                        <label>
                                          Write a review<span>*</span>
                                        </label>
                                        <textarea
                                          name="message"
                                          rows={6}
                                          placeholder
                                          defaultValue={""}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-12">
                                      <div className="form-group button5">
                                        <button type="submit" className="btn">
                                          Submit
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                                {/*/ End Form */}
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
        <NotificationContainer />
        <Footer />
      </>
    );
  }
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const details_qs = await axios.get(
    `http://backend:8000/api/v1/products/details/${context.params.slug}`
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
  };
};

export default connect(mapStateToProps, { handleAddToCart, fetchUserOrder })(
  withRouter(DetailsPage)
);

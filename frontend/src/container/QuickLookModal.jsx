import React, { Component } from "react";
import { connect } from "react-redux";
import ContentLoader, { Facebook } from "react-content-loader";
import { css } from "@emotion/react";

import HashLoader from "react-spinners/HashLoader";

import { handleAddToCart, fetchUserOrder } from "../store/actions/cart";
import { openCartSideBar } from "../store/actions/cartSideBar";
import { openSideBar } from "../store/actions/cartSideBar";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class QuickLookModal extends Component {
  state = {
    size: "",
    color: "",
    quantity: 1,
  };

  onSubmitCart = (slug) => {
    const data = {
      size: this.state.size,
      slug: slug,
      quantity: this.state.quantity,
    };
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
    const { details, loading_two } = this.props;
    return (
      <div className="row no-gutters">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex">
          {/* Product Slider */}
          <div className="product-gallery justify-content-center align-items-center">
            <div className="quickview-slider-active">
              <div style={{ overflow: "hidden" }} className="single-slider">
                <img
                  style={{
                    height: "500px",

                    width: "500px",
                    overflow: "hidden",
                    borderRadius: "20px",
                  }}
                  src={
                    details.thumbnail
                      ? `http://192.168.0.8:8000${details.thumbnail}`
                      : "https://via.placeholder.com/550x750"
                  }
                  alt="#"
                />
              </div>
            </div>
          </div>
          {/* End Product slider */}
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="quickview-content">
            <h2>{details.name}</h2>
            <div className="quickview-ratting-review">
              <div className="quickview-ratting-wrap">
                <div className="quickview-ratting">
                  <i className="yellow fa fa-star" />
                  <i className="yellow fa fa-star" />
                  <i className="yellow fa fa-star" />
                  <i className="yellow fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <a href="#"> (1 customer review)</a>
              </div>
              <div className="quickview-stock">
                <span>
                  <i className="fa fa-check-circle-o" /> in stock
                </span>
              </div>
            </div>
            <h3>$29.00</h3>
            <div className="quickview-peragraph mt-3">
              <p>{details.short_desc}</p>
            </div>
            <div class="size">
              <div class="row">
                <div class="col-lg-4 col-12">
                  <h5 class="title">Size</h5>
                  <select
                    onChange={(e) => this.setState({ size: e.target.value })}
                  >
                    {details.s_size ? (
                      <option
                        selected={`${
                          this.state.size === "s" ? "selected" : ""
                        }`}
                      >
                        S
                      </option>
                    ) : (
                      ""
                    )}

                    {details.m_size ? (
                      <option
                        selected={`${
                          this.state.size === "m" ? "selected" : ""
                        }`}
                      >
                        M
                      </option>
                    ) : (
                      ""
                    )}
                    {details.l_size ? (
                      <option
                        selected={`${
                          this.state.size === "l" ? "selected" : ""
                        }`}
                      >
                        L
                      </option>
                    ) : (
                      ""
                    )}

                    {details.m_size ? (
                      <option
                        selected={`${
                          this.state.size === "m" ? "selected" : ""
                        }`}
                      >
                        M
                      </option>
                    ) : (
                      ""
                    )}
                    {details.xl_size ? (
                      <option
                        selected={`${
                          this.state.size === "xl" ? "selected" : ""
                        }`}
                      >
                        XL
                      </option>
                    ) : (
                      ""
                    )}
                    {details.xxl_size ? (
                      <option
                        selected={`${
                          this.state.size === "xxl" ? "selected" : ""
                        }`}
                      >
                        XXL
                      </option>
                    ) : (
                      ""
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className="quantity mt-3">
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
                      onClick={() => this.handlePlusQuantity(details.id)}
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
                data-tip-disable={this.state.size === "" ? false : true}
              >
                <button
                  data-tip
                  data-for="registerTip"
                  onClick={() => this.onSubmitCart(details.slug)}
                  className="btn"
                  disabled={this.state.size === "" ? true : false}
                >
                  <p style={{ color: "white" }}>Add to cart</p>
                </button>
              </span>
              <a href="#" className="btn min">
                <i className="ti-heart" />
              </a>
              <a href="#" className="btn min">
                <i className="fa fa-compress" />
              </a>
            </div>
            <div className="default-social">
              <h4 className="share-now">Share:</h4>
              <ul>
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="youtube" href="#">
                    <i className="fa fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading_two: state.cart.loading,
  };
};

export default connect(mapStateToProps, {
  handleAddToCart,
  fetchUserOrder,
  openSideBar,
})(QuickLookModal);

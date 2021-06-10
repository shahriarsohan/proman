import React, { Component } from "react";
import { connect } from "react-redux";
import ContentLoader, { Facebook } from "react-content-loader";
import { handleAddToCart } from "../store/actions/cart";

class QuickLookModal extends Component {
  state = {
    size: "",
    color: "",
  };

  onSubmitCart = (slug) => {
    console.log(this.state.size);
    console.log(this.state.color);
    const data = {
      size: this.state.size,
      slug: slug,
    };
    this.props.handleAddToCart(data);
  };

  render() {
    const { details } = this.props;
    console.log(this.state.size);
    return (
      <div role="document">
        <div className="modal-content">
          <div className="modal-body">
            {this.props.loading ? (
              <ContentLoader viewBox="0 0 380 70">
                {/* Only SVG shapes */}
                <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
              </ContentLoader>
            ) : (
              <div className="row no-gutters">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex">
                  {/* Product Slider */}
                  <div className="product-gallery justify-content-center align-items-center">
                    <div className="quickview-slider-active">
                      <div
                        style={{ overflow: "hidden" }}
                        className="single-slider"
                      >
                        <img
                          style={{
                            height: "500px",
                            width: "500px",
                            overflow: "hidden",
                          }}
                          src={
                            details.thumbnail
                              ? `http://127.0.0.1:8000${details.thumbnail}`
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
                            onChange={(e) =>
                              this.setState({ size: e.target.value })
                            }
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
                          <button
                            type="button"
                            className="btn btn-primary btn-number"
                            disabled="disabled"
                            data-type="minus"
                            data-field="quant[1]"
                          >
                            <i className="ti-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          name="quant[1]"
                          className="input-number"
                          data-min={1}
                          data-max={1000}
                          defaultValue={1}
                        />
                        <div className="button plus">
                          <button
                            type="button"
                            className="btn btn-primary btn-number"
                            data-type="plus"
                            data-field="quant[1]"
                          >
                            <i className="ti-plus" />
                          </button>
                        </div>
                      </div>
                      {/*/ End Input Order */}
                    </div>
                    <div className="add-to-cart">
                      <button
                        onClick={() => this.onSubmitCart(details.slug)}
                        className="btn"
                      >
                        Add to cart
                      </button>
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
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { handleAddToCart })(QuickLookModal);

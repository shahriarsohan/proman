import React, { Component } from "react";
import ContentLoader, { Facebook } from "react-content-loader";

export default class QuickLookModal extends Component {
  render() {
    const { details } = this.props;
    console.log(details);
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
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  {/* Product Slider */}
                  <div className="product-gallery">
                    <div className="quickview-slider-active">
                      <div className="single-slider">
                        <img
                          src="https://via.placeholder.com/569x528"
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
                      <a href="#" className="btn">
                        Add to cart
                      </a>
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

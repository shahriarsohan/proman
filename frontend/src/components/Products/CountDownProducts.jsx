import React, { Component } from "react";
import Link from "next/link";

export default class CountDownProducts extends Component {
  state = {
    has_weekly_offer: false,
    weekly_offer_qs: {},
  };

  componentDidMount() {
    console.log(this.props.weekly_qs);
    if (this.props.weekly_qs) {
      this.setState({
        has_weekly_offer: true,
        weekly_offer_qs: this.props.weekly_qs,
      });
    }
  }

  render() {
    // const { weekly_qs } = this.props;
    // if (weekly_qs) {
    console.log("nameeeeeeeeeeeeeeeeeeee", this.state.weekly_qs);
    // }
    console.log(this.state.has_weekly_offer);
    return (
      <section className="cown-down mb-5">
        <div className="section-inner ">
          <div className="container-fluid">
            {this.state.has_weekly_offer ? (
              <div className="row">
                <div className="col-lg-6 col-12 padding-right">
                  <div className="image">
                    <img
                      src={`${this.state.weekly_offer_qs.product.thumbnail}`}
                      alt="#"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12 padding-left">
                  <div className="content">
                    <div className="heading-block">
                      {/* <div className="heading-countdown"> */}
                      <p className="small-title">Deal of Week</p>
                      <Link
                        href={`/details/${this.state.weekly_offer_qs.product.slug}`}
                      >
                        <h3 className="title">
                          {this.state.weekly_offer_qs.product.name}
                        </h3>
                      </Link>
                      <p className="text">
                        {this.state.weekly_offer_qs.product.short_desc}
                      </p>
                      <h1 className="price">
                        <img
                          width="15px"
                          height="15px"
                          src="/images/taka.png"
                        />
                        {this.state.weekly_offer_qs.discount_price}
                        <s>
                          <img
                            width="15px"
                            height="15px"
                            src="/images/taka.png"
                          />
                          {this.state.weekly_offer_qs.actual_price}
                        </s>
                      </h1>
                      <div className="coming-time">
                        <div className="clearfix" data-countdown="2021/02/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    );
  }
}

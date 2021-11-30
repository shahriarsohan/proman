import React, { Component } from "react";
import { withRouter } from "next/router";

import { isMobile } from "react-device-detect";
import LoadingOverlay from "react-loading-overlay";
import HashLoader from "react-spinners/HashLoader";

// import BackNavbar from "../../../../src/components/Navbar/BackNavbar";
// import axiosInstance from "../../../../src/api/axios";
import moment from "moment";
import BackNavbar from "../../../src/components/Navbar/BackNavbar";
import axiosInstance from "../../../src/api/axios";
import NavbarDetailsPage from "../../../src/components/Navbar/NavbarDetailsPage";
import Navigation from "../../../src/components/Navigation";

class success extends Component {
  state = {
    isMobile: null,
    isBrowser: null,
    userOrder: {},
    loading: false,
    error: null,
    query: "",
    products: [],
  };

  componentWillMount() {
    this.setState({
      query: this.props?.router?.query[Object.keys(this.props.router.query)[0]],
    });
  }

  // componentWillMount() {
  //   axiosInstance
  //     .post("orders/order-confirm")
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  // }

  componentDidMount() {
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
    this.getUserOrder();
  }

  getUserOrder = () => {
    this.setState({ loading: true });

    const data = {
      order_id: this.state.query,
    };

    axiosInstance
      .post("orders/user-track-order", data)
      .then((response) => {
        this.setState({ loading: false, userOrder: response.data }, () => {
          this.setState({ products: response.data.products.cart });
        });
      })
      .catch((error) => {
        this.setState({ error: error.response.data, loading: false });
      });
  };

  render() {
    const { userOrder, query, products } = this.state;
    console.log("query", query);

    // if (this.state.products){
    //   const choices =
    // }

    var date = moment()
      .add(3, "d") //replace 2 with number of days you want to add
      .toDate();
    console.log(date);
    return (
      <>
        <NavbarDetailsPage isMobile={this.state.isMobile} />
        <div className="container">
          {this.state.loading ? (
            <LoadingOverlay
              active={this.state.loading}
              spinner={<HashLoader color="#08d9d6" />}
            ></LoadingOverlay>
          ) : (
            <>
              <article className="card-tracker">
                <header className="card-header mt-5">
                  {" "}
                  My Orders / Tracking{" "}
                </header>
                <div className="card-body mt-5">
                  <h6 className="text-uppercase">
                    Order ID: #{userOrder.order_id}{" "}
                  </h6>
                  <article className="card mt-4">
                    <div className="card-body row">
                      <div className="col">
                        {" "}
                        <strong>Estimated Delivery time:</strong> <br />
                        {moment(date).format("MMM Do YY")}
                      </div>
                      <div className="col">
                        {" "}
                        <strong>Shipping BY:</strong> <br /> Redx, |{" "}
                        <i className="fa fa-phone" /> +০৯৬১০০০৭৩৩৯{" "}
                      </div>
                      <div
                        style={{ fontWeight: "bold" }}
                        className="col text-uppercase"
                      >
                        {" "}
                        <strong>Status:</strong> <br /> {userOrder.order_status}{" "}
                      </div>
                      <div className="col text-uppercase">
                        {" "}
                        <strong>Tracking #:</strong> <br /> #
                        {userOrder.order_id}{" "}
                      </div>
                    </div>
                  </article>
                  <div className="track">
                    <div
                      className={`${
                        userOrder.order_status === "created" ||
                        "picked_by_delivery" ||
                        "delivery_complete"
                          ? "step active"
                          : "step"
                      }`}
                    >
                      {" "}
                      <span className="icon-tracker">
                        {" "}
                        <i className="fa fa-check" />{" "}
                      </span>{" "}
                      <span className="text">Order confirmed</span>{" "}
                    </div>
                    <div
                      className={`${
                        userOrder.order_status === "picked_by_delivery" ||
                        "delivery_complete"
                          ? "step active"
                          : "step"
                      }`}
                    >
                      {" "}
                      <span className="icon-tracker">
                        {" "}
                        <i className="fa fa-user" />{" "}
                      </span>{" "}
                      <span className="text"> Picked by courier</span>{" "}
                    </div>

                    <div
                      className={`${
                        userOrder.order_status === "delivery_complete"
                          ? "step active"
                          : "step"
                      }`}
                    >
                      {" "}
                      <span className="icon-tracker">
                        {" "}
                        <i className="fas fa-people-carry" />{" "}
                      </span>{" "}
                      <span className="text">Ready for pickup</span>{" "}
                    </div>
                  </div>
                  <hr />
                  <hr />{" "}
                  {/* <a href="#" className="btn btn-warning" data-abc="true">
              {" "}
              <i className="fa fa-chevron-left" /> Back to orders
            </a> */}
                </div>
              </article>
              <div className="row d-flex justify-content-center mt-70 mb-70">
                <div className="col-md-12">
                  <div className="main-card mb-3 card-timeline">
                    {/* <div className="card-body-timeline">
                      <h5 className="card-title">User Timeline</h5>
                      <div className="scroll-area">
                        <div className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                          <div className="vertical-timeline-item vertical-timeline-element">
                            <div>
                              {" "}
                              <span className="vertical-timeline-element-icon bounce-in">
                                {" "}
                                <i className="badge badge-dot badge-dot-xl badge-success" />{" "}
                              </span>
                              <div className="vertical-timeline-element-content bounce-in">
                                <h4 className="timeline-title">
                                  Meeting with client
                                </h4>
                                <p>
                                  Meeting with USA Client, today at{" "}
                                  <a href="javascript:void(0);" data-abc="true">
                                    12:00 PM
                                  </a>
                                </p>{" "}
                                <span className="vertical-timeline-element-date">
                                  9:30 AM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-timeline-item vertical-timeline-element">
                            <div>
                              {" "}
                              <span className="vertical-timeline-element-icon bounce-in">
                                {" "}
                                <i className="badge badge-dot badge-dot-xl badge-warning">
                                  {" "}
                                </i>{" "}
                              </span>
                              <div className="vertical-timeline-element-content bounce-in">
                                <p>
                                  Another meeting with UK client today, at{" "}
                                  <b className="text-danger">3:00 PM</b>
                                </p>
                                <p>
                                  Yet another one, at{" "}
                                  <span className="text-success">5:00 PM</span>
                                </p>{" "}
                                <span className="vertical-timeline-element-date">
                                  12:25 PM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-timeline-item vertical-timeline-element">
                            <div>
                              {" "}
                              <span className="vertical-timeline-element-icon bounce-in">
                                {" "}
                                <i className="badge badge-dot badge-dot-xl badge-danger">
                                  {" "}
                                </i>{" "}
                              </span>
                              <div className="vertical-timeline-element-content bounce-in">
                                <h4 className="timeline-title">
                                  Discussion with team about new product launch
                                </h4>
                                <p>
                                  meeting with team mates about the launch of
                                  new product. and tell them about new features
                                </p>{" "}
                                <span className="vertical-timeline-element-date">
                                  6:00 PM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-timeline-item vertical-timeline-element">
                            <div>
                              {" "}
                              <span className="vertical-timeline-element-icon bounce-in">
                                {" "}
                                <i className="badge badge-dot badge-dot-xl badge-primary">
                                  {" "}
                                </i>{" "}
                              </span>
                              <div className="vertical-timeline-element-content bounce-in">
                                <h4 className="timeline-title text-success">
                                  Discussion with marketing team
                                </h4>
                                <p>
                                  Discussion with marketing team about the
                                  popularity of last product
                                </p>{" "}
                                <span className="vertical-timeline-element-date">
                                  9:00 AM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-timeline-item vertical-timeline-element">
                            <div>
                              {" "}
                              <span className="vertical-timeline-element-icon bounce-in">
                                {" "}
                                <i className="badge badge-dot badge-dot-xl badge-success">
                                  {" "}
                                </i>{" "}
                              </span>
                              <div className="vertical-timeline-element-content bounce-in">
                                <h4 className="timeline-title">
                                  Purchase new hosting plan
                                </h4>
                                <p>
                                  Purchase new hosting plan as discussed with
                                  development team, today at{" "}
                                  <a href="javascript:void(0);" data-abc="true">
                                    10:00 AM
                                  </a>
                                </p>{" "}
                                <span className="vertical-timeline-element-date">
                                  10:30 PM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-timeline-item vertical-timeline-element">
                            <div>
                              {" "}
                              <span className="vertical-timeline-element-icon bounce-in">
                                {" "}
                                <i className="badge badge-dot badge-dot-xl badge-warning">
                                  {" "}
                                </i>{" "}
                              </span>
                              <div className="vertical-timeline-element-content bounce-in">
                                <p>
                                  Another conference call today, at{" "}
                                  <b className="text-danger">11:00 AM</b>
                                </p>
                                <p>
                                  Yet another one, at{" "}
                                  <span className="text-success">1:00 PM</span>
                                </p>{" "}
                                <span className="vertical-timeline-element-date">
                                  12:25 PM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-timeline-item vertical-timeline-element">
                            <div>
                              {" "}
                              <span className="vertical-timeline-element-icon bounce-in">
                                {" "}
                                <i className="badge badge-dot badge-dot-xl badge-warning">
                                  {" "}
                                </i>{" "}
                              </span>
                              <div className="vertical-timeline-element-content bounce-in">
                                <p>
                                  Another meeting with UK client today, at{" "}
                                  <b className="text-danger">3:00 PM</b>
                                </p>
                                <p>
                                  Yet another one, at{" "}
                                  <span className="text-success">5:00 PM</span>
                                </p>{" "}
                                <span className="vertical-timeline-element-date">
                                  12:25 PM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-timeline-item vertical-timeline-element">
                            <div>
                              {" "}
                              <span className="vertical-timeline-element-icon bounce-in">
                                {" "}
                                <i className="badge badge-dot badge-dot-xl badge-danger">
                                  {" "}
                                </i>{" "}
                              </span>
                              <div className="vertical-timeline-element-content bounce-in">
                                <h4 className="timeline-title">
                                  Discussion with team about new product launch
                                </h4>
                                <p>
                                  meeting with team mates about the launch of
                                  new product. and tell them about new features
                                </p>{" "}
                                <span className="vertical-timeline-element-date">
                                  6:00 PM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-timeline-item vertical-timeline-element">
                            <div>
                              {" "}
                              <span className="vertical-timeline-element-icon bounce-in">
                                {" "}
                                <i className="badge badge-dot badge-dot-xl badge-primary">
                                  {" "}
                                </i>{" "}
                              </span>
                              <div className="vertical-timeline-element-content bounce-in">
                                <h4 className="timeline-title text-success">
                                  Discussion with marketing team
                                </h4>
                                <p>
                                  Discussion with marketing team about the
                                  popularity of last product
                                </p>{" "}
                                <span className="vertical-timeline-element-date">
                                  9:00 AM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-timeline-item vertical-timeline-element">
                            <div>
                              {" "}
                              <span className="vertical-timeline-element-icon bounce-in">
                                {" "}
                                <i className="badge badge-dot badge-dot-xl badge-success">
                                  {" "}
                                </i>{" "}
                              </span>
                              <div className="vertical-timeline-element-content bounce-in">
                                <h4 className="timeline-title">
                                  Purchase new hosting plan
                                </h4>
                                <p>
                                  Purchase new hosting plan as discussed with
                                  development team, today at{" "}
                                  <a href="javascript:void(0);" data-abc="true">
                                    10:00 AM
                                  </a>
                                </p>{" "}
                                <span className="vertical-timeline-element-date">
                                  10:30 PM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-timeline-item vertical-timeline-element">
                            <div>
                              {" "}
                              <span className="vertical-timeline-element-icon bounce-in">
                                {" "}
                                <i className="badge badge-dot badge-dot-xl badge-warning">
                                  {" "}
                                </i>{" "}
                              </span>
                              <div className="vertical-timeline-element-content bounce-in">
                                <p>
                                  Another conference call today, at{" "}
                                  <b className="text-danger">11:00 AM</b>
                                </p>
                                <p>
                                  Yet another one, at{" "}
                                  <span className="text-success">1:00 PM</span>
                                </p>{" "}
                                <span className="vertical-timeline-element-date">
                                  12:25 PM
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
               
                */}
                    {/* {this.state.userOrder.order_status === 'delivery_complete' ? (
                      
                    ) : ''} */}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <Navigation />
      </>
    );
  }
}

export default withRouter(success);

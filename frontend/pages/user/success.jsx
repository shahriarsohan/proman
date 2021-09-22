import React, { Component } from "react";

import { isMobile } from "react-device-detect";

import BackNavbar from "../../src/components/Navbar/BackNavbar";
import axiosInstance from "../../src/api/axios";

export default class success extends Component {
  state = {
    isMobile: null,
    isBrowser: null,
  };

  componentWillMount() {
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
  }

  componentWillMount() {
    axiosInstance
      .post("orders/order-confirm")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <BackNavbar isMobile={this.state.isMobile} />
        <div className="container">
          <article className="card-tracker">
            <header className="card-header mt-5"> My Orders / Tracking </header>
            <div className="card-body">
              <h6>Order ID: OD45345345435</h6>
              <article className="card">
                <div className="card-body row">
                  <div className="col">
                    {" "}
                    <strong>Estimated Delivery time:</strong> <br />
                    29 nov 2019{" "}
                  </div>
                  <div className="col">
                    {" "}
                    <strong>Shipping BY:</strong> <br /> BLUEDART, |{" "}
                    <i className="fa fa-phone" /> +1598675986{" "}
                  </div>
                  <div className="col">
                    {" "}
                    <strong>Status:</strong> <br /> Picked by the courier{" "}
                  </div>
                  <div className="col">
                    {" "}
                    <strong>Tracking #:</strong> <br /> BD045903594059{" "}
                  </div>
                </div>
              </article>
              <div className="track">
                <div className="step active">
                  {" "}
                  <span className="icon-tracker">
                    {" "}
                    <i className="fa fa-check" />{" "}
                  </span>{" "}
                  <span className="text">Order confirmed</span>{" "}
                </div>
                <div className="step active">
                  {" "}
                  <span className="icon-tracker">
                    {" "}
                    <i className="fa fa-user" />{" "}
                  </span>{" "}
                  <span className="text"> Picked by courier</span>{" "}
                </div>
                <div className="step">
                  {" "}
                  <span className="icon-tracker">
                    {" "}
                    <i className="fa fa-truck" />{" "}
                  </span>{" "}
                  <span className="text"> On the way </span>{" "}
                </div>
                <div className="step">
                  {" "}
                  <span className="icon-tracker">
                    {" "}
                    <i className="fa fa-box" />{" "}
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
                <div className="card-body-timeline">
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
                              meeting with team mates about the launch of new
                              product. and tell them about new features
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
                              meeting with team mates about the launch of new
                              product. and tell them about new features
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
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

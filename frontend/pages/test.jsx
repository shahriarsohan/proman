import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "next/router";

class test extends Component {
  componentDidMount() {
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_Bearer"),
      },
    };

    axios
      .post(
        "http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com/api/v1/cart/test"
      )
      .then((res) => this.props.router.push(res.data.GatewayPageURL))
      .catch((err) => console.log(err));
  }

  render() {
    return <div></div>;
  }
}

export default withRouter(test);

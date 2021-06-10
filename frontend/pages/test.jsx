import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "next/router";

class test extends Component {
  componentDidMount() {
    const config = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };

    axios
      .post("http://127.0.0.1:8000/api/v1/cart/test")
      .then((res) => this.props.router.push(res.data.GatewayPageURL))
      .catch((err) => console.log(err));
  }

  render() {
    return <div></div>;
  }
}

export default withRouter(test);

import React, { Component } from "react";
import { connect } from "react-redux";
import ContentLoader, { Facebook } from "react-content-loader";
import { css } from "@emotion/react";

import HashLoader from "react-spinners/HashLoader";

import { handleAddToCart, fetchUserOrder } from "../store/actions/cart";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class QuickLookModal extends Component {
  render() {
    const { details, loading_two } = this.props;
    return <div className="row no-gutters"></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading_two: state.cart.loading,
  };
};

export default QuickLookModal;

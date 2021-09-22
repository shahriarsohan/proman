import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Link from "next/link";
import { css } from "@emotion/react";
import Image from "next/image";
import { isMobile } from "react-device-detect";

import { fetchUserOrder, handleDeleteFromCart } from "../../store/actions/cart";
import {
  closeSideBarCart,
  openSideBarCart,
} from "../../store/actions/cartSideBar";
import Cart from "../SideCart/Cart";
import SideNav from "./SideNav";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class NavbarDetails extends React.Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  handleDelete = (id) => {
    const data = {
      id: id,
    };
    this.props.deleteItem(data);
  };

  render() {
    const { cart, loading, error } = this.props;
    // //console.log("cart", cart);
    return (
      <>
        <h1>Hello</h1>
      </>
    );
  }
}
// const [cart, setCart] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(false);

const mapStateToProps = (state) => {
  return {
    cart: state.cart.data,
    loading: state.cart.loading,
    error: state.cart.error,
    sidebar: state.sidebar.sideOpen,
    cartSideBarOpenTwo: state.cartsidebar.sideOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchUserOrder()),
    deleteItem: (data) => dispatch(handleDeleteFromCart(data)),
    openSideBarCart: () => dispatch(openSideBarCart()),
    closeSideBarCart: () => dispatch(closeSideBarCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarDetails);

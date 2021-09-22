import React, { Component } from "react";
import Image from "next/image";
import { connect } from "react-redux";

import Slider from "react-slick";
import Cart from "../SideCart/Cart";
import {
  openSideBarCart,
  closeSideBarCart,
} from "../../store/actions/cartSideBar";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoPlay: true,
};

class HeroSlider extends Component {
  render() {
    //console.log(this.props.cartSideBarOpenTwo);
    return (
      <>
        <section className="hro-slider mb-5">
          <Slider {...settings}>
            <div>
              <img
                height="100%"
                width="100%"
                src="/images/cover-real-desktop.png"
                alt="proman-hero-slider-images"
              />
            </div>
            <div>
              <img
                height="100%"
                width="100%"
                src="/images/cover/cover-real-2.png"
                alt="proman-hero-slider-images"
              />
            </div>
            <div>
              <img
                height="100%"
                width="100%"
                src="/images/cover/cover-real-2.png"
                alt="proman-hero-slider-images"
              />
            </div>
            <div>
              <img
                height="100%"
                width="100%"
                src="/images/cover/cover-real-3.png"
                alt="proman-hero-slider-images"
              />
            </div>
            <div>
              <img
                height="100%"
                width="100%"
                src="/images/cover/cover-real-4.png"
                alt="proman-hero-slider-images"
              />
            </div>
            <div>
              <img
                height="100%"
                width="100%"
                src="/images/cover/cover-real-5.png"
                alt="proman-hero-slider-images"
              />
            </div>
          </Slider>
        </section>
        {this.props.cartSideBarOpenTwo && (
          <Cart close={this.props.closeSideBarCart} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    cartSideBarOpenTwo: state.cartsidebar.sideOpen,
  };
};

export default connect(mapStateToProps, {
  openSideBarCart,
  closeSideBarCart,
})(HeroSlider);

import React, { Component } from "react";
import { connect } from "react-redux";

import Slider from "react-slick";
import Cart from "../SideCart/Cart";
import {
  openSideBarCart,
  closeSideBarCart,
} from "../../store/actions/cartSideBar";
import Image from "next/image";

import { isMobile } from "react-device-detect";

var settings = {
  dots: true,
  autoplay: true,
};

class HeroSlider extends Component {
  state = {
    mobile: null,
  };

  componentDidMount() {
    if (isMobile) {
      this.setState({
        mobile: true,
      });
    } else {
      this.setState({ mobile: false });
    }
  }

  render() {
    //console.log(this.props.cartSideBarOpenTwo);
    return (
      <>
        <section className="hro-slider mb-5 pb-4">
          <Slider {...settings}>
            <div>
              <Image
                height={this.state.mobile ? "720" : "520"}
                width="2000"
                src="/images/herobanner/be_cooler.png"
                alt="proman-hero-slider-images"
              />
            </div>
            {/* <div>
              <Image
                height={this.state.mobile ? "720" : "520"}
                width="2000"
                src="/images/herobanner/proman_fb_cover.png"
                alt="proman-hero-slider-images"
              />
            </div> */}
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

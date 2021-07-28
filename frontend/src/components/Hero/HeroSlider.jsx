import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};
export const HeroSlider = () => {
  console.log(isMobile);
  return (
    <>
      <section className="hro-slider mb-5">
        <Slider {...settings}>
          <div>
            <img
              height="100%"
              width="100%"
              src="/images/cover-real-desktop.png"
            />
          </div>
          <div>
            <img height="100%" width="100%" src="/images/cover-real-2.png" />
          </div>
          <div>
            <img height="100%" width="100%" src="/images/cover-real-2.png" />
          </div>
          <div>
            <img height="100%" width="100%" src="/images/cover-real-3.png" />
          </div>
          <div>
            <img height="100%" width="100%" src="/images/cover-real-4.png" />
          </div>
          <div>
            <img height="100%" width="100%" src="/images/cover-real-5.png" />
          </div>
        </Slider>
      </section>
    </>
  );
};

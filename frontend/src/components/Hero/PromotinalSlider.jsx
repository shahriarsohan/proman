import React, { Component } from "react";
import Image from "next/image";
import Carousel from "react-elastic-carousel";

class PromotionalSlider extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "item #1",
        image:
          "https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/images/logo.png",
      },
      {
        id: 2,
        title: "item #2",
        image:
          "https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/images/logo.png",
      },
      {
        id: 3,
        title: "item #3",
        image:
          "https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/images/logo.png",
      },
      {
        id: 4,
        title: "item #4",
        image:
          "https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/images/logo.png",
      },
      {
        id: 5,
        title: "item #5",
        image:
          "https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/images/logo.png",
      },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <section>
        <div className="container">
          <Carousel>
            {items.map((item) => (
              <div className="" key={item.id}>
                <Image src={item.image} width="1000px" height="200px" />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    );
  }
}

export default PromotionalSlider;

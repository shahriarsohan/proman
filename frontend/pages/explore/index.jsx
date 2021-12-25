import React, { Component } from "react";
import Link from "next/link";

import { withRouter } from "next/router";
import { isMobile } from "react-device-detect";
import Slider from "react-slick";

import NavbarDetailsPage from "../../src/components/Navbar/NavbarDetailsPage";
import Navigation from "../../src/components/Navigation";

const settings = {
  className: "center",
  //   centerMode: true,
  infinite: false,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
};

class Explore extends Component {
  state = {
    isMobile: null,
    inBrowser: null,
  };

  componentDidMount() {
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
  }

  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <NavbarDetailsPage
          route={this.props.router.back}
          name="Explore"
          isMobile={this.state.isMobile}
        />
        <br />
        <br />
        <br />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="exploreTitle">Engage</p>
              <ul className="d-flex flex-column explorePageWrpr">
                <li>
                  <div className="d-flex listWrpr pull-left justify-content-between">
                    <Link href="/fun/spin-the-wheel">
                      <div className="d-flex">
                        <img src="https://images.bewakoof.com/banner/b-fun.png" />
                        <p>Pro'fun: Test Your Day!</p>
                      </div>
                    </Link>
                  </div>
                </li>
                <li style={{ paddingTop: "20px" }}>
                  <div className="d-flex listWrpr pull-left justify-content-between">
                    <Link href="/user/refer">
                      <div className="d-flex">
                        <img src="https://images.bewakoof.com/banner/Refer---Earn-final.png" />
                        <p>Refer and Earn</p>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 popularCategories">
              <p className="categoriesTitle">Popular Curations</p>
              <div>
                <Slider {...settings}>
                  <div className="widgetImg">
                    <img src="https://images.bewakoof.com/banner/indo-fusion-final.png" />
                  </div>
                  <div className="widgetImg">
                    <img src="https://images.bewakoof.com/banner/Best-sellers-final.png" />
                  </div>
                  <div className="widgetImg">
                    <img src="https://images.bewakoof.com/banner/Cosmos-final.png" />
                  </div>
                  <div className="widgetImg">
                    <img src="https://images.bewakoof.com/banner/Plus-size-fina-.png" />
                  </div>
                  <div className="widgetImg">
                    <img src="https://images.bewakoof.com/banner/Marvel-fina.png" />
                  </div>
                  <div className="widgetImg">
                    <img src="https://images.bewakoof.com/banner/Lasty-sizes-final.png" />
                  </div>
                  <div className="widgetImg">
                    <img src="https://images.bewakoof.com/banner/Print-o-mania-final.png" />
                  </div>
                  <div className="widgetImg">
                    <img src="https://images.bewakoof.com/banner/React-final.png" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default withRouter(Explore);

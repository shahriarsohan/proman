import React, { Component } from "react";
import { withRouter } from "next/router";
import { isMobile } from "react-device-detect";
import NavbarDetailsPage from "../../src/components/Navbar/NavbarDetailsPage";

class Fun extends Component {
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
      <>
        <NavbarDetailsPage
          route={this.props.router.back}
          name="Pro Fun"
          isMobile={this.state.isMobile}
        />
        <br />

        <div className="bfun-wrap">
          <img className="containerHeight" src="/images/pro-fun.png" />
          <div className="coin-wrap flex">
            <div className="coin-text d-flex justify-content-center flex-column">
              <div className="balance">
                Coins earned so far:
                <img src="https://images.bewakoof.com/web/bitmap-2x-1629269689.webp" />
                <span>0</span>
              </div>
              <span>Tip: Play a few games to earn coins.</span>
            </div>
            <a className="other-reward d-flex align-items-center justify-content-center">
              View Coins Balance
            </a>
          </div>
          <div className="grid_wrap">
            <div className="grid_row">
              <div className="false">
                <div className="grid_one">
                  <a>
                    <img src="https://images.bewakoof.com/banner/spin-the-wheel-340-x-180.jpg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Fun);

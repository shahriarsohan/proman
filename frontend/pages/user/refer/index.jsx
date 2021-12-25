import React, { Component } from "react";
import { withRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withAlert } from "react-alert";

import NavbarDetailsPage from "../../../src/components/Navbar/NavbarDetailsPage";
import Navigation from "../../../src/components/Navigation";

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

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

class Refer extends Component {
  state = {
    isMobile: null,
    inBrowser: null,
    copied: false,
  };

  componentDidMount() {
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
  }

  handleShareButton = () => {
    console.log(navigator);
    if (navigator.share) {
      navigator
        .share({
          title:
            "Sign Up and get 100Tk instant discount on your first order by using my referral code ABCDED",
          url: document.location.href,
        })
        .then(() => {})
        .catch(() => {
          alert("Not working");
        });
    } else {
      alert("Sorry! Your browser does not support Web Share API");
    }
  };

  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <NavbarDetailsPage
          route={this.props.router.back}
          name="Refer & Earn"
          isMobile={this.state.isMobile}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="refer-img mt-2">
                <img src="https://images.bewakoof.com/web/refer-n-earn-720-x-433-1632806576.jpg" />
              </div>
              <div className="refer-text">
                <p>Invite your friends to Bewakoof and</p>
                <p>
                  <b>earn ₹100 for every referral</b>
                </p>
              </div>
              <div className="refer-button">
                <FacebookShareButton
                  className="p-2"
                  url={"https://peing.net/ja/"}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                  className="p-2"
                  url={"https://peing.net/ja/"}
                >
                  <TwitterIcon round size={32} />
                </TwitterShareButton>
                <WhatsappShareButton
                  className="p-2"
                  url={"https://peing.net/ja/"}
                >
                  <WhatsappIcon round size={32} />
                </WhatsappShareButton>
                <div className="copy-share">
                  <img
                    // height = ""
                    width="30px"
                    onClick={this.handleShareButton}
                    src="https://images.bewakoof.com/web/group-6-2x-1602590023.png"
                  />
                </div>
              </div>
              <div className="refer-copy">
                <p className="referralBlockText">Tap to copy the code</p>
                <div className="referralBlockCode">
                  <CopyToClipboard
                    text="ABCEDS"
                    onCopy={() =>
                      this.setState({ copied: true }, () =>
                        this.props.alert.success("Copied")
                      )
                    }
                  >
                    <p>ABCEDS</p>
                  </CopyToClipboard>
                </div>
              </div>
              <div className="instructionsCard">
                <div className="instructionsTitle">How does referral work?</div>
                <ul className="instructionsContent">
                  <li>
                    <span className="instructionsContentBullet">1</span>
                    <span className="instructionsContentText">
                      Invite your friend to Proman
                    </span>
                  </li>
                  <li>
                    <span className="instructionsContentBullet">2</span>
                    <span className="instructionsContentText">
                      They place their first order with your referral code & get
                      a flat ₹100 discount
                    </span>
                  </li>
                  <li>
                    <span className="instructionsContentBullet">3</span>
                    <span className="instructionsContentText">
                      Their order gets completed (delivered & crossed the return
                      window)
                    </span>
                  </li>
                  <li>
                    <span className="instructionsContentBullet">4</span>
                    <span className="instructionsContentText">
                      You get Proman credits worth ₹100
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* {this.state.copied && this.props.alert.show("Oh look, an alert!")} */}
        <Navigation />
      </div>
    );
  }
}

export default withRouter(withAlert()(Refer));

import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { withRouter } from "next/router";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import NavbarDetailsPage from "../../../src/components/Navbar/NavbarDetailsPage";

import WheelComponent from "../../../src/components/wheels/index";
import axiosInstance from "../../../src/api/axios";

const segColors = [
  "#EE4040",
  "#F0CF50",
  "#815CD1",
  "#3DA5E0",
  "#34A24F",
  "#F9AA1F",
];
const segments = ["100TK", "20TK", "50TK", "30TK", "Bad Luck", "10Tk"];

class App extends Component {
  state = {
    isMobile: null,
    isBrowser: null,
    finishedWheel: false,
    amount_discount: 0,
    free_delivery: false,
  };

  componentDidMount() {
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
  }

  onFinished = (winner) => {
    console.log(winner);
    this.setState({
      finishedWheel: true,
    });

    if (winner === "100TK") {
      this.setState({ amount_discount: 100 });
    } else if (winner === "20TK") {
      this.setState({ amount_discount: 20 });
    } else if (winner === "50TK") {
      this.setState({ amount_discount: 50 });
    } else if (winner === "10Tk") {
      this.setState({ amount_discount: 10 });
    }

    const data = {
      amount_discount: this.state.amount_discount,
    };

    //call to api
    axiosInstance
      .post("profile/pro-credit", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Confetti
          run={this.state.finishedWheel}
          confettiSource={{ x: 0, y: 0 }}
          numberOfPieces={500}
          recycle={false}
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
        />
        <NavbarDetailsPage
          route={this.props.router.back}
          name="Spin The Wheel"
          isMobile={this.state.isMobile}
        />
        <br />
        <br />

        <br />
        <br />

        <div className="spinTheWheelContainer">
          <div className="stw-header mb-3">
            <h1>Feeling Lucky?</h1>
            <p>Spin the Wheel & get a chance to win </p>
          </div>
          <div className="stw-wheel">
            <WheelComponent
              segments={segments}
              segColors={segColors}
              //   winningSegment={segments[(3, 5)]}
              onFinished={(winner) => this.onFinished(winner)}
              primaryColor="red"
              contrastColor="white"
              buttonText="Test"
              isOnlyOnce={false}
              size={290}
              //   upDuration={100}
              //   downDuration={1000}
              //   fontFamily="Arial"
            />
          </div>
          <div className="stw-footer">
            <div className="stw-links">
              <ul>
                <li>How to play</li>
                <li>Terms & conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);

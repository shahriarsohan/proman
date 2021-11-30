import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { withRouter } from "next/router";

import NavbarDetailsPage from "../../src/components/Navbar/NavbarDetailsPage";

class DailyDeal extends Component {
  state = {
    isMobile: null,
    isBrowser: null,
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
      <div>
        <NavbarDetailsPage
          route={this.props.router.back}
          name="Daily Deals"
          isMobile={this.state.isMobile}
        />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="deals-bg">
                <div style={{ height: "100px" }}>
                  <h1>Deals are coming soon</h1>

                  <p>sorry for inconvenience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DailyDeal);

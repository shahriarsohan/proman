import { withRouter } from "next/router";
import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import NavbarDetailsPage from "../../src/components/Navbar/NavbarDetailsPage";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer/Footer";
import Newsletter from "../../src/components/NewsLetter/NewsLetter";
import Service from "../../src/components/Service/Service";

class AboutUs extends Component {
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
      <>
        <NavbarDetailsPage
          route={this.props.router.back}
          name="Our Story"
          isMobile={this.state.isMobile}
        />
        <div className="container section p-5">
          <div className="row  mt-5">
            <div className="story-title col-lg-5">
              <p>Our Story</p>
              {this.state.isMobile ? (
                <hr className="hr-Mobile"></hr>
              ) : (
                <hr className="hr-Desktop"></hr>
              )}
              <img
                src="https://images.bewakoof.com/uploads/campaign/our-story-1501569294.png"
                title="Our Story Banner"
                alt="Our Story Banner"
              />
            </div>
            <div className="col-lg-7 story-details">
              <div>
                <p className="detail-title">
                  Our story starts with the name
                  <br />
                  <span className="proman-high-lighter">Proman.</span>
                </p>
                <div className="detail-content">
                  <p className="head">
                    Society perceives Bewakoof as stupid. But what does society
                    call Bewakoof? Often, it’s anything different or anything
                    that’s done differently.
                  </p>
                </div>
                <p className="detail-content">
                  Often when people have done the right thing, without caring
                  about what society thinks, they have been called Bewakoof.
                  These are the people who have changed the world and made it a
                  better place.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid company-moral">
          <div className="row">
            <div className="container p-5">
              <div className="row">
                <div className="col-12 moral p-5">
                  <p className="moral-head">
                    Making an impact through{" "}
                    <span style={{ fontWeight: "bold" }}>innovation</span>,
                    <br />
                    <span style={{ fontWeight: "bold" }}>honesty</span>,, and
                    <span style={{ fontWeight: "bold" }}>thoughtfulness</span>,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="explain-column container section mb-5 p-5">
          <div className="row">
            <div className="col-12">
              <p className="explain-title">
                For us, Bewakoof is the spirit of looking at things differently.
              </p>
              <div className="explain-body">
                <p>Trying new things even when success is not guaranteed.</p>

                <p>Not stepping on others to get ahead.</p>
                <p>
                  Thinking about the benefit of others just as you’d think about
                  your own.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div classNamee="img-innovation">
            <img
              width="100%"
              height="100%"
              src="https://images.bewakoof.com/uploads/campaign/our-story-innovation-1501593008.png?tr=q-90"
            />
          </div>
        </div>
        <div className="container section">
          <div className="row">
            <div className="col-12">
              <div className="defination-column">
                <p className="defination-line1">
                  <span style={{ fontWeight: "bolder" }}>Proman</span> is
                </p>
                <p className="defination-line2">
                  Distinctive fashion
                  <br />
                  for the{" "}
                  <span style={{ fontWeight: "bolder", fontSize: "35px" }}>
                    contemporary Indian
                  </span>
                </p>
                <p className="defination-line3">
                  with{" "}
                  <span style={{ fontWeight: "bolder", fontSize: "35px" }}>
                    {" "}
                    In-house capabilities
                  </span>{" "}
                  in design, manufacturing, technology, data science, and
                  marketing
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="company-stats section"> */}
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="mt-5 mb-5">
                <p className="stats-head">7 years</p>
                <p className="stats-tail">of journey so far</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="mt-5 mb-5">
                <p className="stats-head">250+</p>
                <p className="stats-tail">team-members</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="mt-5 mb-5">
                <p className="stats-head">1 Cr+</p>
                <p className="stats-tail">products sold!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="mt-5 mb-5">
                <p className="stats-head">60 L+</p>
                <p className="stats-tail">app downloads</p>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="story-nutshell section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="story-title text-center">
                  <p>
                    What makes us{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        fontSize: "60px",
                        lineHeight: "60px",
                      }}
                    >
                      Proman
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row p-5">
              <div className="col-md-4 col-lg-4 col-12">
                <div className="story-block">
                  <p className="title-story">Innovative design</p>
                  <p className="body-story">
                    Creating designs that are an extension of you.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-12">
                <div className="story-block">
                  <p className="title-story">Direct to consumer model</p>
                  <p className="body-story">
                    Bringing accessibility and value to everyday fashion.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-12">
                <div className="story-block">
                  <p className="title-story">Homegrown</p>
                  <p className="body-story">
                    Imagined in India, Made in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Service />
        <Newsletter />
        <Footer />
        <Navigation />
      </>
    );
  }
}

export default withRouter(AboutUs);

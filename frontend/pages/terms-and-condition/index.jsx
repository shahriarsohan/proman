import React, { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import NavbarDetailsPage from "../../src/components/Navbar/NavbarDetailsPage";

class Terms extends Component {
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
          name="Terms of Service"
          isMobile={this.state.isMobile}
        />

        <section id="terms-of-service container mt-5">
          <div className="card">
            <h1 className="primary-heading mt-5">Terms of Service</h1>
            <div className="paragraph">
              <h6>Welcome to proman.clothing!</h6>
              <br />
              <p>
                These terms and conditions outline the rules and regulations for
                the use of Proman's Website, located at
                https://proman.clothing/.
              </p>
              <br />
              <p>
                By accessing this website we assume you accept these terms and
                conditions. Do not continue to use proman.clothing if you do not
                agree to take all of the terms and conditions stated on this
                page.
              </p>
              <br />
              <p>
                The following terminology applies to these Terms and Conditions,
                Privacy Statement and Disclaimer Notice and all Agreements:
                "Client", "You" and "Your" refers to you, the person log on this
                website and compliant to the Company’s terms and conditions.
                "The Company", "Ourselves", "We", "Our" and "Us", refers to our
                Company. "Party", "Parties", or "Us", refers to both the Client
                and ourselves. All terms refer to the offer, acceptance and
                consideration of payment necessary to undertake the process of
                our assistance to the Client in the most appropriate manner for
                the express purpose of meeting the Client’s needs in respect of
                provision of the Company’s stated services, in accordance with
                and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural,
                capitalization and/or he/she or they, are taken as
                interchangeable and therefore as referring to same.
              </p>
            </div>
            <div className="paragraph">
              <h2>Cookies</h2>
              <p className="m-1">
                We employ the use of cookies. By accessing proman.clothing, you
                agreed to use cookies in agreement with the Proman's Privacy
                Policy.
              </p>
              <br />
              <p>
                Most interactive websites use cookies to let us retrieve the
                user’s details for each visit. Cookies are used by our website
                to enable the functionality of certain areas to make it easier
                for people visiting our website. Some of our
                affiliate/advertising partners may also use cookies.
              </p>
            </div>
            <div className="paragraph">
              <h2>License</h2>
              <p className="m-1">
                Unless otherwise stated, Proman and/or its licensors own the
                intellectual property rights for all material on
                proman.clothing. All intellectual property rights are reserved.
                You may access this from proman.clothing for your own personal
                use subjected to restrictions set in these terms and conditions.
              </p>
              <br />
              <p>
                <strong>You must note:</strong>
                <ul className="p-4">
                  <li>1.Republish material from proman.clothing</li>
                  <li>
                    2.Sell, rent or sub-license material from proman.clothing
                  </li>
                  <li>
                    3.Reproduce, duplicate or copy material from proman.clothing
                  </li>
                  <li>4.Redistribute content from proman.clothing</li>
                </ul>
              </p>
              <p>
                Parts of this website offer an opportunity for users to post and
                exchange opinions and information in certain areas of the
                website. Proman does not filter, edit, publish or review
                Comments prior to their presence on the website. Comments do not
                reflect the views and opinions of Proman,its agents and/or
                affiliates. Comments reflect the views and opinions of the
                person who post their views and opinions. To the extent
                permitted by applicable laws, Proman shall not be liable for the
                Comments or for any liability, damages or expenses caused and/or
                suffered as a result of any use of and/or posting of and/or
                appearance of the Comments on this website.
              </p>
            </div>

            <div className="paragraph">
              <h2>Hyperlinking to our Content</h2>
              <p className="m-1">
                The following organizations may link to our Website without
                prior written approval:
              </p>
              <br />
              <ul className="p-4">
                <li>1.Government agencies;</li>
                <li>2.Search engines;</li>
                <li>3.News organizations;</li>
                <li>
                  4.Online directory distributors may link to our Website in the
                  same manner as they hyperlink to the Websites of other listed
                  businesses; and
                </li>
                <li>
                  5.System wide Accredited Businesses except soliciting
                  non-profit organizations, charity shopping malls, and charity
                  fundraising groups which may not hyperlink to our Web site.
                </li>
              </ul>
              <p>
                These organizations may link to our home page, to publications
                or to other Website information so long as the link: (a) is not
                in any way deceptive; (b) does not falsely imply sponsorship,
                endorsement or approval of the linking party and its products
                and/or services; and (c) fits within the context of the linking
                party’s site.
              </p>
            </div>
            <div className="paragraph">
              <h2>Content Liability</h2>

              <p>
                We shall not be hold responsible for any content that appears on
                your Website. You agree to protect and defend us against all
                claims that is rising on your Website. No link(s) should appear
                on any Website that may be interpreted as libelous, obscene or
                criminal, or which infringes, otherwise violates, or advocates
                the infringement or other violation of, any third party rights.
              </p>
            </div>
            <div className="paragraph">
              <h2>Your Privacy</h2>

              <p>
                Please read <Link href="/privacy-policy">Privacy Policy</Link>
              </p>
            </div>
            <div className="paragraph">
              <h2>Reservation of Rights</h2>

              <p>
                We reserve the right to request that you remove all links or any
                particular link to our Website. You approve to immediately
                remove all links to our Website upon request. We also reserve
                the right to amen these terms and conditions and it’s linking
                policy at any time. By continuously linking to our Website, you
                agree to be bound to and follow these linking terms and
                conditions.
              </p>
            </div>
            <div className="paragraph">
              <h2>Removal of links from our website</h2>

              <p>
                If you find any link on our Website that is offensive for any
                reason, you are free to contact and inform us any moment. We
                will consider requests to remove links but we are not obligated
                to or so or to respond to you directly.
              </p>
              <p>
                We do not ensure that the information on this website is
                correct, we do not warrant its completeness or accuracy; nor do
                we promise to ensure that the website remains available or that
                the material on the website is kept up to date.
              </p>
            </div>
            <div className="paragraph">
              <h2>Disclaimer</h2>

              <p>
                To the maximum extent permitted by applicable law, we exclude
                all representations, warranties and conditions relating to our
                website and the use of this website. Nothing in this disclaimer
                will:
              </p>
              <p>
                <strong>You must note:</strong>
                <ul className="p-4">
                  <li>
                    1.limit or exclude our or your liability for death or
                    personal injury;
                  </li>
                  <li>
                    2.limit or exclude our or your liability for fraud or
                    fraudulent misrepresentation;
                  </li>
                  <li>
                    3.limit any of our or your liabilities in any way that is
                    not permitted under applicable law; or
                  </li>
                  <li>
                    4.exclude any of our or your liabilities that may not be
                    excluded under applicable law.
                  </li>
                </ul>
              </p>
              <p>
                The limitations and prohibitions of liability set in this
                Section and elsewhere in this disclaimer: (a) are subject to the
                preceding paragraph; and (b) govern all liabilities arising
                under the disclaimer, including liabilities arising in contract,
                in tort and for breach of statutory duty.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Terms);

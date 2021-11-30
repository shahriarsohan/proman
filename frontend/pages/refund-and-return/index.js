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
            <h1 className="primary-heading mt-5">Refund & Return</h1>
            <div className="paragraph">
              <h6>Welcome to proman.clothing!</h6>
              <br />
              <p>
                Proman.clothing holds the return policy to high regards as we
                constantly think of the comfort of our customers. We have a
                return policy of 3 days for most of our products if the product
                meets certain criteria i.e. if the product is damaged or if the
                product was not the item which was ordered. After 3 days, the
                item will not be taken back and proman.clothing will not be held
                liable. Customers are requested to contact our customer care
                team as soon as possible for return of unwanted products.
              </p>
              <br />
              <p>
                We reserve the right to refuse an exchange or refund if goods
                are not returned in a saleable condition or are damaged. If you
                don’t have the money receipt then proman.clothing will refuse to
                accept the return of the product.
              </p>
              <br />
              <p>
                Proman holds all the rights of the balance added to its account.
                Proman may refund the customer to his/her desired transactional
                medium but the process may take up to 1 weeks or more depending
                upon the circumstances.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Terms);

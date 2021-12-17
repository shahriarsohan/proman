import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

export default class SmallBanner extends Component {
  render() {
    return (
      <section className="small-banner section">
        <div className="container-fluid">
          <div className="row">
            {/* Single Banner  */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <Link href="/details/relaxed-fit-s-hoodie">
                  <Image
                    height="615"
                    width="1000"
                    src="/images/real_comfort.png"
                    alt="#"
                  />
                </Link>

                {/* <div className="content">
                  <p>Man's Collectons</p>
                  <h3>
                    Summer travel <br /> collection
                  </h3>
                  <a href="#">Discover Now</a>
                </div> */}
              </div>
            </div>
            {/* /End Single Banner  */}
            {/* Single Banner  */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <Link href="/details/sweet-corn-color-hoddie">
                  <Image
                    height="615"
                    width="1000"
                    src="/images/be_wise.gif"
                    alt="#"
                  />
                </Link>

                {/* <div className="content">
                  <p>Bag Collectons</p>
                  <h3>
                    Awesome Bag <br /> 2020
                  </h3>
                  <a href="#">Shop Now</a>
                </div> */}
              </div>
            </div>
            {/* /End Single Banner  */}
            {/* Single Banner  */}
            <div className="col-lg-4 col-12">
              <div className="single-banner tab-height">
                <Link href="/details/deer-sequence">
                  <Image
                    height="615"
                    width="1000"
                    src="/images/full_proof_winter.gif"
                    alt="#"
                  />
                </Link>

                {/* <div className="content">
                  <p>Flash Sale</p>
                  <h3>
                    Mid Season <br /> Up to <span>40%</span> Off
                  </h3>
                  <a href="#">Discover Now</a>
                </div> */}
              </div>
            </div>
            {/* /End Single Banner  */}
          </div>
        </div>
      </section>
    );
  }
}

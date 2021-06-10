import React from "react";
import Colors from "./Colors";
import DetailsThumb from "./DetailsThumb";

class ProductDetails extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nike Shoes",
        src: [
          "https://www.sportsbusinessjournal.com/-/media/Images/SBD-Photos/2015/06/18/IMG-Academy.ashx?w=928",
          "https://www.sportsbusinessjournal.com/-/media/Images/SBD-Photos/2015/06/18/IMG-Academy.ashx?w=928",
          "https://www.sportsbusinessjournal.com/-/media/Images/SBD-Photos/2015/06/18/IMG-Academy.ashx?w=928",
          "https://www.sportsbusinessjournal.com/-/media/Images/SBD-Photos/2015/06/18/IMG-Academy.ashx?w=928",
        ],
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="app">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>

            <div className="box">
              <div className="product-des">
                {/* Description */}
                <div className="short">
                  <h4>Nonstick Dishwasher PFOA</h4>
                  <div className="rating-main">
                    <ul className="rating">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-o" />
                      </li>
                      <li className="dark">
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                    <a href="#" className="total-review">
                      (102) Review
                    </a>
                  </div>
                  <p className="price">
                    <span className="discount">$70.00</span>
                    <s>$80.00</s>{" "}
                  </p>
                  <DetailsThumb
                    images={item.src}
                    tab={this.handleTab}
                    myRef={this.myRef}
                  />
                  <p className="description">
                    eget velit. Donec ac tempus ante. Fusce ultricies massa
                    massa. Fusce aliquam, purus eget sagittis vulputate, sapien
                    libero hendrerit est, sed commodo augue nisi non neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tempor, lorem et placerat vestibulum, metus nisi posuere
                    nisl, in
                  </p>
                </div>
                {/*/ End Description */}

                {/* Product Buy */}
                <div className="product-buy">
                  <div className="quantity">
                    <h6>Quantity :</h6>
                    {/* Input Order */}
                    <div className="input-group">
                      <div className="button minus">
                        <button
                          type="button"
                          className="btn btn-primary btn-number"
                          disabled="disabled"
                          data-type="minus"
                          data-field="quant[1]"
                        >
                          <i className="ti-minus" />
                        </button>
                      </div>
                      <input
                        type="text"
                        name="quant[1]"
                        className="input-number"
                        data-min={1}
                        data-max={1000}
                        defaultValue={1}
                      />
                      <div className="button plus">
                        <button
                          type="button"
                          className="btn btn-primary btn-number"
                          data-type="plus"
                          data-field="quant[1]"
                        >
                          <i className="ti-plus" />
                        </button>
                      </div>
                    </div>
                    {/*/ End Input Order */}
                  </div>
                  <div className="add-to-cart">
                    <a href="#" className="btn">
                      Add to cart
                    </a>
                    <a href="#" className="btn min">
                      <i className="ti-heart" />
                    </a>
                    <a href="#" className="btn min">
                      <i className="fa fa-compress" />
                    </a>
                  </div>
                  <p className="cat">
                    Category :<a href="#">Clothing</a>
                  </p>
                  <p className="availability">
                    Availability : 180 Products In Stock
                  </p>
                </div>
                {/*/ End Product Buy */}
              </div>

              <button className="cart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductDetails;

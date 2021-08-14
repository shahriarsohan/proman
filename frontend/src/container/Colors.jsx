import React, { Component } from "react";

class Colors extends Component {
  render() {
    const { colors } = this.props;
    //console.log(colors);
    return (
      <div className="colors">
        {colors.map((color, index) => (
          <button style={{ background: color }} key={index}></button>
        ))}
      </div>
    );
  }
}

export default Colors;

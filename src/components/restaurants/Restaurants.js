import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    return (
      <ul>
        <Restaurant
          restaurant={this.props.restaurant}
          delete={this.props.delete}
        ></Restaurant>
      </ul>
    );
  }
}

export default Restaurants;

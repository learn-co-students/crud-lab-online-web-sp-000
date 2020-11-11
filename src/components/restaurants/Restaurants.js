import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    return this.props.restaurants.map((restaurant) => {
      return (
        <Restaurant
          delete={this.props.delete}
          restaurant={restaurant}
          key={restaurant.id}
        />
      );
    });
  }
}

export default Restaurants;

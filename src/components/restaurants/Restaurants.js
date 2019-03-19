import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {

    return (
      <ul>
        Your Restaurants:
        <li>
          {this.props.restaurants.map(restaurant => (
            <Restaurant key={restaurant.id} restaurant={restaurant} />
          ))}
        </li>
      </ul>
    );
  }
}

export default Restaurants;

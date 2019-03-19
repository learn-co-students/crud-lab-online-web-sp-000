import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    return (
      <p>
        Your Restaurants:
        <ul>
          {this.props.restaurants.map(restaurant => (
            <Restaurant
              key={restaurant.id}
              restaurant={restaurant}
              deleteRestaurant={this.props.deleteRestaurant}
            />
          ))}
        </ul>
      </p>
    );
  }
}

export default Restaurants;

import React, { Component } from "react";
import Restaurant from "./Restaurants";

class Restaurants extends Component {
  render() {
    console.log("RestaurantsList this", this);
    console.log("RestaurantsList props", this.props);

    return (
      <ul>
        Your Restaurants:
        {this.props.restaurants.map(restaurant => {
          return <Restaurant key={restaurant.id} restaurant={restaurant} />;
          // <li key={restaurant.id}>{restaurant.name}</li>
        })}
      </ul>
    );
  }
}

export default Restaurants;

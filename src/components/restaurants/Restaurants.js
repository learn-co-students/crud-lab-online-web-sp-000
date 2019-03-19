import React, { Component } from "react";
import Restaurant from "./Restaurants";

class Restaurants extends Component {
  renderRestaurants = () => {
    console.log("renderRestaurants, this.props.restaurants =", this.props.restaurants);
    
    return this.props.restaurants.map(restaurant => {
      return <li key={restaurant.id}>{restaurant.name}</li>;
      return <Restaurant key={restaurant.id} restaurant={restaurant.name} />;
    });
  };

  render() {
    return (
      <ul>
        Your Restaurants:
        {this.renderRestaurants()}
      </ul>
    );
  }
}

export default Restaurants;

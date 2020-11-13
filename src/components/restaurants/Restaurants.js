import React, { Component } from 'react';
import Restaurant from './Restaurant'


class Restaurants extends Component {
  render() {
    let restaurants = this.props.restaurants.map(function (restaurant) {
      return <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
    }, this)
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {
  render() {
    return(
      <ul>
        { this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} removeRestaurant={this.props.removeRestaurant} />)}
      </ul>
    );
  }
};

export default Restaurants;
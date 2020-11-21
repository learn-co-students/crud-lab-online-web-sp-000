import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurants.map((restaurant,idx) => {
      return <Restaurant restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
    });     
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
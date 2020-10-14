import React, { Component } from 'react';
import { ProgressPlugin } from 'webpack';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const {restaurants, deleteRestaurant} = this.props
    const showRestaurants = restaurants.map(restaurant => {
      return (
        <li>
        <Restaurant 
          key={restaurant.id}
          restaurant={restaurant}
          deleteRestaurant={deleteRestaurant}
        />
        </li>
      )
    })

    return(
      <ul>
       {showRestaurants}
      </ul>
    );
  }
};

export default Restaurants;
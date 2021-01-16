import React, { Component } from 'react';
import Restaurant from './Restaurant';


class Restaurants extends Component {
  render() {
    const {restaurants, deleteRestaurant} = this.props
    const allRestaurants = restaurants.map(restaurant => {
      return(
        <li><Restaurant
        key={restaurant.id}
        restaurant={restaurant}
        deleteRestaurant={deleteRestaurant}
        />
        </li>
      )
    })
    return(
      <ul>
        Restaurants Component
        {allRestaurants}
      </ul>
    );
  }
};

export default Restaurants;

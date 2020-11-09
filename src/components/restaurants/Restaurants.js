import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    { console.log('restaurants_plural') }

    const { restaurants, deleteRestaurant } = this.props;
    const restaurantList = restaurants.map(restaurant => {
      return (
        <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant} />
      )
    });

    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;

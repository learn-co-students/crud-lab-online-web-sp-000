import React, { Component } from 'react';
import Restaurant from './Restaurants';

class Restaurants extends Component {
  render() {
    const {restaurants, deleteRestaurant} = this.props;

    return(
      <ul>
        // displays a list of restaurant components
        // has the restaurant as a prop
        {restaurants.map(restaurant => {
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={deleteRestaurant}
            />})}
      </ul>
    );
  }
};

export default Restaurants;

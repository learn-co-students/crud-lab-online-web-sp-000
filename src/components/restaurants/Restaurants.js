import React from 'react';
import Restaurant from './Restaurant'

const Restaurants = props => {
  const restaurants = props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={props.deleteRestaurant} />)

    return(
      <ul>
        {restaurants}
      </ul>
    );

}

export default Restaurants;

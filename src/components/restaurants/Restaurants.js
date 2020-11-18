import React, { Component } from 'react';
import Restaurant from './Restaurant'


const Restaurants = props => {
    
const restaurants =
props.restaurants.map(restaurant => <Restaurant
  key={restaurant.id}
  restaurant={restaurant}
  deleteRestaurant={props.deleteRestaurant}
  text={restaurant.text}/>)

    return (
        <div>
          <ul>
          { restaurants }
        </ul>
        </div>
      );
  };

export default Restaurants;

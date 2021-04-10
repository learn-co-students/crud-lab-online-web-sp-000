import React from 'react'
import Restaurant from './Restaurant'

const Restaurants = props => 
  <ul>
    {props.restaurants.map(resto => {
      return (
        <Restaurant
          key={resto.id}
          restaurant={resto}
          deleteRestaurant={props.deleteRestaurant} />
      )
    })}
  </ul>

export default Restaurants

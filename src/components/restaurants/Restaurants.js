import React from 'react'
import Restaurant from './Restaurant';

const Restaurants = props => {

  const renderRestaurants = () => {
    return props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} delete={props.delete}/>)
  }
    console.log("Restaurants props", props)
    return(
        <div>
            {renderRestaurants()}
        </div>
    )
}
export default Restaurants;


import React from 'react'
import ReviewsContainer from '../../containers/ReviewsContainer'

const Restaurant = props => {
  const { restaurant, deleteRestaurant } = props
  return (
    <div>
      <hr/>
      <li>
        <h2>
          {restaurant.text}&nbsp;
          <button
            onClick={() => {
              deleteRestaurant(restaurant.id)
            }}> X 
          </button>
        </h2>
        <ReviewsContainer
          restaurant={restaurant} />
      </li>
    </div>
  )
}

export default Restaurant

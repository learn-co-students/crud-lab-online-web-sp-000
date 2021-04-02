import React from 'react';
import Restaurant from './Restaurant'

const Restaurants = (props) => {

  const reviews = id => props.reviews.filter(review => review.restaurantId === id);
  const restaurants = props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} delete={props.delete} reviews={reviews(restaurant.id)} addReview={props.addReview} deleteReview={props.deleteReview} />)
    return(
      <ul>
        Restaurants Component
        {restaurants}
      </ul>
    );
};

export default Restaurants;
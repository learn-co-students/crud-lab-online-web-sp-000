import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    const {restaurants, reviews, addReview, deleteRestaurant, deleteReview} = this.props

    return(
      <ul>
        {restaurants.map(restaurant => <Restaurant 
        restaurant={restaurant} reviews={reviews} 
        addReview={addReview} deleteRestaurant={deleteRestaurant}
        deleteReview={deleteReview}/>)}
      </ul>
    );
  }
};

export default Restaurants;
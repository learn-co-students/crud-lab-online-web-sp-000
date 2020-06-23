import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    
    const {reviews, restaurant, deleteReview} = this.props

    const reviewsToShow = reviews.filter(review => review.restaurantId === restaurant.id)
    
    return (
      <ul>
        {reviewsToShow.map(review => <Review review={review} deleteReview={deleteReview}/>)}
      </ul>
    );
  }
};

export default Reviews;
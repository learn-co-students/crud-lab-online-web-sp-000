import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, deleteReview, restaurantId} = this.props

    const filterReviews = reviews.filter(review => review.restaurantId === restaurantId)

    const showReviews = filterReviews.map((review, i) => {
      return <Review 
        key={i} 
        review={review} 
        deleteReview={deleteReview} 
        />
    })

    return (
      <ul>
       {showReviews}
      </ul>
    );
  }
};

export default Reviews;
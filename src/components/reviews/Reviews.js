import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const restaurantsReviews = reviews.filter(review => review.restaurantId === restaurantId);
    const renderReviews = restaurantsReviews.map((review, index) => {
      return <Review 
        key={index} 
        review={review} 
        deleteReview={deleteReview} 
      />
    })

    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const filteredReviews = reviews.filter(review => review.restaurantId === restaurantId);

    return (
      <ul>
        {filteredReviews.map((review, index) => {
          return <Review key={index} review={review} deleteReview={deleteReview} />
        })}
      </ul>
    );
  }
};

export default Reviews;
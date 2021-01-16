import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const restReviews = reviews.filter(review => review.restaurantId === restaurantId)

    const allReviews = restReviews.map(review => {
      return(
        <li><Review
        key={review.id}
        review={review}
        deleteReview={deleteReview}
        />
        </li>
      )
    })
    return (
      <ul>
        Reviews
        {allReviews}
      </ul>
    );
  }
};

export default Reviews;

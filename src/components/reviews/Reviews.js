import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const allReviews = restaurantReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })
    return (
      <div>
        <ul>
          {allReviews}
        </ul>
     </div>
    );
  }
};

export default Reviews;
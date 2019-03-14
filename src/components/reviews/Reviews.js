import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const filteredReviews = reviews.filter(review => review.restaurantId === restaurantId);

    const displayReviews = filteredReviews.map( (review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {displayReviews}
        </ul>
      </div>
    )
  }
};

export default Reviews;

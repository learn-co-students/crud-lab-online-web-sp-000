import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);

    console.log(associatedReviews)
    return (
      <ul>
        {associatedReviews.map(rev => <Review review={rev} deleteReview={deleteReview}/>)}
      </ul>
    );
  }
};

export default Reviews;
import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {restaurantId, reviews, deleteReview} = this.props
    const relevantReviews = reviews.filter( review => review.restaurantId === restaurantId)
    return (
      <ul>
        { relevantReviews.map( r => <Review key={r.id} review={r} deleteReview={deleteReview} /> ) }
      </ul>
    );
  }
};

export default Reviews;
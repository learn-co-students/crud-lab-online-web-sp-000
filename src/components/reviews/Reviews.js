import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, deleteReview } = this.props;
    return (
      <ul>
        {reviews.map(review => <Review key={review.id} deleteReview={deleteReview} review={review}/>)}
      </ul>
    );
  }
};

export default Reviews;
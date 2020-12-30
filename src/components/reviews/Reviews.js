import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, deleteReview } = this.props
    return (
      <ul>
        Reviews
        {reviews.map(r => <Review key={r.id} deleteReview={deleteReview} review={r} />)}
      </ul>
    );
  }
};

export default Reviews;
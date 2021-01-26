import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews && this.props.reviews.map(review => <Review key = {review.id} removeReview = {this.props.removeReview} review={review} />)}
      </ul>
    );
  }
};

export default Reviews;
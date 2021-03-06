import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, removeReview } = this.props;
    return (
      <ul>
        { reviews.map(r => <Review key={r.id} review={r} removeReview={removeReview} />) }
      </ul>
    );
  }
};

export default Reviews;
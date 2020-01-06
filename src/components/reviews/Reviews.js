import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filteredReviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId);
    return (
      <ul>
        {filteredReviews.map(review => {
          return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
        })}
      </ul>
    );
  }
};

export default Reviews;

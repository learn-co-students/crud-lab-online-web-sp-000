import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaurantReviews = this.props.reviews.filter(e => e.restaurantId === this.props.restaurantId)

    return (
      <ul>
        {restaurantReviews.map(review => <Review review={review} key={review.id} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurantId}/>)}
      </ul>
    );
  }
};

export default Reviews;
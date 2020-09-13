import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        Reviews
        {console.log('reviews comp', this.props.restaurant, this.props.restaurant.reviews)}
        {this.props.restaurant.reviews.map (review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} /> )}
      </ul>
    );
  }
};

export default Reviews;
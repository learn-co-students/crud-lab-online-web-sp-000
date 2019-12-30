import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // filter through array of reviews and
    // return reviews that are associated
    // with a particular restaurant
    const reviews = this.props.reviews.filter(
      (review) => review.restaurantId === this.props.restaurantId
    );
    return (
      <ul>
        {reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
            deleteReview={this.props.deleteReview}
            editReview={this.props.editReview}
          />
        ))}
      </ul>
    );
  }
}

export default Reviews;

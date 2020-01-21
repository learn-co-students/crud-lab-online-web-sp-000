import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
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
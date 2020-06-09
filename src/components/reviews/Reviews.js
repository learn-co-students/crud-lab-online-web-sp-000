import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  displayReviews = () => {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return reviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />)
  }

  render() {
    return (
      <ul>
        {this.displayReviews()}
      </ul>
    );
  }
};

export default Reviews;

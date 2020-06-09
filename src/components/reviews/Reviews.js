import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const restaurantReviews = reviews.map(review => {return <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>})
    return (
      <ul>
        {restaurantReviews}
      </ul>
    );
  }
};

export default Reviews;

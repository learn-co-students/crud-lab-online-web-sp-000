import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const correctReviews = this.props.reviews.filter(reviews => reviews.restaurantId === this.props.restaurantId)
    const reviews = correctReviews.map((review,idx) => {
      return <Review review={review} deleteReview={this.props.deleteReview} />
    }); 
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
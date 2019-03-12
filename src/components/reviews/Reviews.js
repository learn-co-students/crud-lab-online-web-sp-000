import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const renderReviews = this.props.reviews.filter( review => this.props.restaurantId === review.restaurantId  )

    const reviewList = renderReviews.map( (review) => <Review review={review} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurantId}/>)

    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;

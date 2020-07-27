import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {


    const sortedReviews = this.props.reviews.filter(review=>review.restaurantId===this.props.restaurantId)
    const reviewList = sortedReviews.map(review=> {return <Review review={review} key={review.id} deleteReview={this.props.deleteReview}/>})
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
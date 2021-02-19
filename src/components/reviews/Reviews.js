import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {restaurantId, reviews, deleteReview} = this.props
    const relevantReviews = reviews.filter( review => review.restaurantId === restaurantId)
    
    const list = relevantReviews.map( (r,idx) => <Review key={idx} review={r} deleteReview={deleteReview} /> )
    
    return (
      <ul>
        {/* { relevantReviews.map( (r,idx) => <Review key={idx} review={r} deleteReview={deleteReview} /> ) } */}
        {list}
      </ul>
    );
  }
};

export default Reviews;
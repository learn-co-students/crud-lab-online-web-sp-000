import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
      console.log(this.props.reviews)
    const {reviews, restaurantId, deleteReview } = this.props;
    const theRightReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const reviewList = theRightReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
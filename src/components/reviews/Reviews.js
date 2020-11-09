import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    { console.log('reviews_plural') }

    const reviews = this.props.reviews;
    const restaurantId = this.props.restaurantId
    const deleteReview = this.props.deleteReview

    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId);

    const reviewList = restaurantReviews.map((review, index) => {
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

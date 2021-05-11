import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { restaurantId } = this.props;
    const reviewList = this.props.reviews.filter(review => review.restaurantId === restaurantId)
    const restReviews = reviewList.map((review, idx) => {
      return <Review key={idx} review={review} deleteReview={this.props.deleteReview} />
    })

    return (
      <ul>
        {restReviews}
      </ul>
    );
  }
};

export default Reviews;
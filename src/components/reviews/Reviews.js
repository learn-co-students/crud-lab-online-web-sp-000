import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {


    const correctReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);

    const reviewList = correctReviews.map((review) => {
      return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>

    );
  }
};

export default Reviews;

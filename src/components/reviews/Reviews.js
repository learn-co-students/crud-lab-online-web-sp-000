import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const myReviews = this.props.reviews && this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId).map(review => <Review key={review.id} id={review.id} review={review} deleteReview = {this.props.deleteReview}/>)
    return (
      <div>
      <ul>
        {myReviews}
      </ul>
    </div>
    );
  }
};

export default Reviews;

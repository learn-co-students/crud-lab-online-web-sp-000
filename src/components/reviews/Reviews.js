import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { reviews, restaurant, deleteReview } = this.props;
    const filteredReviews = reviews.filter(review => review.restaurantId === restaurant.id)
    const reviewList = filteredReviews.map((r) => {
      return <Review key={r.id} review={r} delete={deleteReview}/>
    })
    debugger

    return (
      <ul>
        {reviewList}
        {/* {this.props.reviews.map(r => <Review key={r.id} review={r} delete={this.props.deleteReview}/>)} */}
      </ul>
    );
  }
};

export default Reviews;
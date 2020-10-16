import React, { Component } from 'react';
import Review from './Review';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Reviews extends Component {

  render() {
    let filteredReviews = this.filterReviews(this.props.reviews)

    return (
      <ul>
        {this.props.reviews && filteredReviews.map((review) => (
          <Review review={review} deleteReview={this.props.deleteReview} />
        ))}
      </ul>
    );
  }

  filterReviews = reviews => {
    let filtered = reviews.filter((review) => (
      review.restaurantId === this.props.restaurantId
    ))
    return filtered
  }
};

export default Reviews;
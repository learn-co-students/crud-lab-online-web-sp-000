import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

export default ReviewsContainer;

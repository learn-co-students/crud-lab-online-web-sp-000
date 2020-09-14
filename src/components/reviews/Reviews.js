import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let matchingReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    let newReviews = matchingReviews.map ((review, index) => <Review key={index} review={review} deleteReview={this.props.deleteReview} /> )
    console.log('reviews pre render', matchingReviews, this.props)
    return (
      <ul>
        <br></br>
        <h5>Reviews</h5>
        <br></br>
        {console.log('reviews comp', this.props)}
        {newReviews}
      </ul>
    );
  }
};

export default Reviews;
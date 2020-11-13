import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    //debugger
  

    let reviews = this.props.reviews.map(function (review) {
      return (
        <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
      )
    }, this)
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
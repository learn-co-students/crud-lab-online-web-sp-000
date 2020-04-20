import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filteredReview = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    
    const reviews = filteredReview.map((review, index) => {
      return <Review key={index} review={review} deleteReview={this.props.deleteReview} />
    }) 
    
    return (
      <ul>
       {reviews}
      </ul>
    );
  }
};

export default Reviews;
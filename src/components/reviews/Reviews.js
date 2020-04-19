import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.map((review, id) => {
      return <Review key={id} review={review} deleteReview={this.props.deleteReview} />
    }) 
    
    return (
      <ul>
       {reviews}
      </ul>
    );
  }
};

export default Reviews;
import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  reviews = props => {
    return props.reviews.map(review => <Review key={review.id} {...review} 
      deleteReview={props.deleteReview}/>)
  }

  render() {
    return (
      <ul>
        Reviews
        {this.reviews}
      </ul>
    );
  }
};

export default Reviews;
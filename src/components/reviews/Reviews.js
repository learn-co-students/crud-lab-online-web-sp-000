import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
          {this.props.reviews.map(review => <li key={review.id}><Review key={review.id} deleteReview={this.props.deleteReview} review={review}/></li>)}
      </ul>
    );
  }
};

export default Reviews;

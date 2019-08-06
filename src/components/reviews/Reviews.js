import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviewsList = this.props.reviews.map(r => {
      return <Review review={r} key={r.id} deleteReview={this.props.deleteReview} />
    })
    return(
      <ul>
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;
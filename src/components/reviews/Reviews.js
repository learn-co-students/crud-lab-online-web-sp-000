import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const reviewList = this.props.reviews.map(r => {
      return <Review review={r} key={r.id} deleteReview={this.props.deleteReview} />
    })
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
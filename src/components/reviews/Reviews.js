import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const revs = this.props.reviews.map(r => <Review key={r.id} review={r} deleteReview={this.props.deleteReview} />)
    return (
      <ul>
        Reviews
        {revs}
      </ul>
    );
  }
};

export default Reviews;
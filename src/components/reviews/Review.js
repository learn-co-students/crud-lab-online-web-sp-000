import React, { Component } from 'react';
import Reviews from './Reviews';

class Review extends Component {

  render() {
    const { review } = this.props;

    return (
      <div>
        <li key={review.id}>
          {review.text}
        </li>
        <button onClick={() => this.props.deleteReview(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;

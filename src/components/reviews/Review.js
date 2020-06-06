import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props
    console.log('Review, this.props.review', this.props.review)
    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => this.props.deleteReview(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;

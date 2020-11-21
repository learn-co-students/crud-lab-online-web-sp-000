import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props;
    console.log(this.props)
    return (
      <div>
        <li key={review.id}>
          {review.text}
          <button onClick={() => this.props.deleteReview(review.id)}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;

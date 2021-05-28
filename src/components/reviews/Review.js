import React, { Component } from 'react';

class Review extends Component {

  removeReview = () => {
    this.props.removeReview(this.props.review.id)
  }







  render() {
    const { review } = this.props;

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.removeReview}> X </button>
      </div>
    );
  }

};

export default Review;

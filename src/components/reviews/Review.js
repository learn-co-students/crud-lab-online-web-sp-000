import React, { Component } from 'react';

class Review extends Component {

  onClickHandler = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props

    return (
      <li>
        {review.text}
        <button onClick={this.onClickHandler}> X </button>
      </li>
    );
  }

};

export default Review;

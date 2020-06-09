import React, { Component } from 'react';

class Review extends Component {
  
  clickHandler = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li id={review.id}>
          {review.text} <button onClick={this.clickHandler}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;

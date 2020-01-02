import React, { Component } from 'react';

class Review extends Component {

  clickHandler = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.clickHandler}> X </button>
      </div>
    );
  }

};

export default Review;

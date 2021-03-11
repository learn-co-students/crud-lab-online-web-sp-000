import React, { Component } from 'react';

class Review extends Component {

  handleClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props;

    console.log(review)

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => this.handleClick()}> X </button>
      </div>
    );
  }

};

export default Review;

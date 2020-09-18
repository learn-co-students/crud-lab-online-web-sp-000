import React, { Component } from 'react';

class Review extends Component {
//Render each review and add a delete button
  onClickHandler = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.onClickHandler}> X </button>
      </div>
    );
  }

};

export default Review;
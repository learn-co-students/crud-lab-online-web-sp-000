import React, { Component } from 'react';

class Review extends Component {

    handleClick = e => {
        this.props.deleteReview(this.props.review.id)
    }

  render() {
    const { review } = this.props;

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={e => this.handleClick(e)}> X </button>
      </div>
    );
  }

};

export default Review;

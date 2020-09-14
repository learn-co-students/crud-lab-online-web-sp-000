import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props
    console.log('review', this.props)
    return (
      <div>
        <br></br>
        <li>
          {review.text}
        </li>
        <button onClick={() => this.props.deleteReview(review.id, review.restaurantId)}> X </button>
      </div>
    );
  }

};

export default Review;

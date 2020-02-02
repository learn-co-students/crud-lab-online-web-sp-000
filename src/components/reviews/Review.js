import React, { Component } from 'react';

class Review extends Component {
  handleDelete = (event) => {
    event.preventDefault()
    this.props.deleteReview({
      id: this.props.review.id,
      restaurantId: this.props.review.restaurantId
    })
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
        {review.text}
        <button onClick={this.handleDelete}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;

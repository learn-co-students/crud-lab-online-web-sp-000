import React, { Component } from 'react';

class Review extends Component {
  state = {
    isEditing: false
  };

  render() {
    const { review, deleteReview, editReview } = this.props;
    // when i click on the update button, an input box should appear
    // around the review i'm trying to edit.
    return (
      <div>
        {this.state.isEditing ? (
          <input type='text' value={review.text} />
        ) : (
          <li>{review.text}</li>
        )}
        <button onClick={() => deleteReview(review.id)}> X </button>
        <button onClick={() => this.setState({ isEditing: true })}>
          Update Review
        </button>
      </div>
    );
  }
}

export default Review;

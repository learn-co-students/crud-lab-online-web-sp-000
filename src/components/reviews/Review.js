import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, removeReview } = this.props;

    return (
        <li>
          {review.text}
          <button
            onClick={() => removeReview(review)}
          > X </button>
        </li>
    );
  }

};

export default Review;

// text key content, a restaurantId key, id key unique to the review 
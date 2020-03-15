import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);

    return (
      <ul>
        {reviews.map(review =>
          <Review deleteReview={this.props.deleteReview}
                  key={review.id}
                  review={review} />
        )}
      </ul>
    );
  }
};

export default Reviews;
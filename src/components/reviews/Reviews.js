import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const getReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    const renderReviews = getReviews.map(review => {
      return <Review key={review.id} review={review} delete={this.props.delete} />
    });

    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
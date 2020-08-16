import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId } = this.props
    const restReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const renderReviews = restReviews.map((rev, idx) => <Review key={idx} review={rev} delete={this.props.delete} />)

    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
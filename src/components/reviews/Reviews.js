import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const associatedReviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId)
    const renderReviews = associatedReviews.map((r) => {return <Review key={r.id} review={r} deleteReview={this.props.deleteReview}/>})

    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
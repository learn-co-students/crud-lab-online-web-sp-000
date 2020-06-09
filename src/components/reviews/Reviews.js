import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
   const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)

   return reviews.map(review => <Review review={review} key={review.id} delete={this.props.delete} />)
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;

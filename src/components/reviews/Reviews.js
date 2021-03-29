import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.map(review => {
      if(review.restaurantId === this.props.restaurantId)
        return (<Review delete={this.props.deleteReview} review={review} id={review.id} restaurant_id={review.restaurant_id}/>)
      })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
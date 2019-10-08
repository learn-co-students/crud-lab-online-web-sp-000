import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId).map(review => <Review delete={this.props.deleteReview} key={review.id} review={review}/>)//add delete
  logReviews = () => console.log(this.props.reviews)//.filter(review => review.restaurantId === this.props.restaurantId))

  render() {
    return (
      <ul>
        {this.logReviews()}
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
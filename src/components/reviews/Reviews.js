import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  showReviews = () => {
    let reviewList = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return reviewList.map(review => <Review review={review} handleClick={this.handleClick}/>)
  }

  handleClick = (id) => {
    this.props.removeReview(id)
  }

  render() {
    return (
      <ul>
        {this.showReviews()}
      </ul>
    );
  }
};

export default Reviews;
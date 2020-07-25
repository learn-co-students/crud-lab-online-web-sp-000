import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

     
    let showReviews = this.props.reviews.filter((review) => review.restaurantId === this.props.restaurantId)

    const showAll = showReviews.map((review, id) => <Review delete={this.props.delete} key={id} review={review}/>)

    return (
      <ul>
        {showAll}
      </ul>
    );
  }
};

export default Reviews;
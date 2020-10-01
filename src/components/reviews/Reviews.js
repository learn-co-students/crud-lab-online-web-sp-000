import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

renderReviews = () => {
  return this.props.reviews.map( review => {
  if (review.id === this.props.restaurant.id)
    <Review key={review.id} review={review} deleteReview={this.props.delete}/>
    // review.id === this.props.resturant.id ? this.props.reviews: null
  }
  )
}
  render() {
    console.log("REVIEWS",this.props.restaurant)
    return (
      <ul>
       {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
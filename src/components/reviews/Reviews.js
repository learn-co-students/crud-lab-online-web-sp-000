import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    console.log("chachachachacha", this.props.restaurantId)
   // const relatedReviews = this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurantId);

   return this.props.reviews.map(review => <Review key={review.id} review={review} removeReview={this.props.removeReview} restaurantId={this.props.restaurantId}/>)
 //  return relatedReviews.map(review => <Review key={review.id} review={review} removeReview={this.props.removeReview} restaurantId={this.props.restaurantId}/>)
  
  }



  render() {
    return (
      <ul>
        Reviews
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
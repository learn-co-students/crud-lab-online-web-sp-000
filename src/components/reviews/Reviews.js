import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  //filter reviews for where restaurantId matches id of restaurant
  reviews = () => {
    //console.log("this.props.reviews: ", this.props.reviews);
    return (
      this.props.reviews.filter( r => r.restaurantId === this.props.restaurantId)
    )
  }

  displayReviews = () => this.reviews().map( r => <Review id={r.id} text={r.text} restaurantId={r.restaurantId} deleteReview={this.props.deleteReview} />)

  render() {
    return (
      <ul>
        {this.displayReviews()}
      </ul>
    );
  }
};

export default Reviews;
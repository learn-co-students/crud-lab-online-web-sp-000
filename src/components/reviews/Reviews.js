import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  renderReviews = () => {
    return this.props.reviews.map(review => {
      return (
        review.restaurantId === this.props.restaurantId && (
          <Review review={review} key={review.id} delete={this.props.delete} />
        )
      );
    });
  };

  // <Review review={this.props.review} delete={this.props.delete} />

  render() {
    return <ul>{this.renderReviews()}</ul>;
  }
}

export default Reviews;

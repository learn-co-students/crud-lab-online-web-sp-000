import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  renderReview = () => {
    const filteredReviews = this.props.reviews.filter(
      (review) => review.restaurantId === this.props.restaurantId
    );

    return filteredReviews.map((review) => (
      <Review
        key={review.id}
        review={review}
        deleteReview={this.props.deleteReview}
      />
    ));
  };

  render() {
    return <ul>{this.renderReview()}</ul>;
  }
}

export default Reviews;

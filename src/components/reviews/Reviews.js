import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const filteredReviews = this.props.reviews.filter(
      (review) => review.restaurantId === this.props.restaurantId
    );
    const reviews = filteredReviews.map((review) => {
      return (
        <Review
          key={review.id}
          delete={this.props.delete}
          review={review}
          restaurantId={this.props.restaurantId}
        />
      );
    });
    return <ul>{reviews}</ul>;
  }
}

export default Reviews;

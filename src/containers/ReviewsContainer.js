import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";
import { addReview, deleteReview } from "../actions/actionCreators";

// should be nested in Restaurant component
class ReviewsContainer extends Component {
  render() {
    const { restaurant } = this.props;
    const currentReviews = this.props.reviews.filter(
      review => restaurant.id === review.restaurantId
    );
    return (
      <div>
        <ReviewInput
          restaurantId={restaurant.id}
          addReview={this.props.addReview}
        />
        <Reviews
          deleteReview={this.props.deleteReview}
          reviews={currentReviews}
        />
      </div>
    );
  }
}

const actionCreators = {
  addReview,
  deleteReview
};

const mapStateToProps = state => ({
  reviews: state.reviews
});

export default connect(mapStateToProps, actionCreators)(ReviewsContainer);

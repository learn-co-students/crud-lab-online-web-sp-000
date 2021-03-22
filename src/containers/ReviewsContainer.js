import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId} />
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { reviews: state.reviews.filter(review => review.restaurantId === ownProps.restaurantId) }
}
const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review }),
  deleteReview: review => dispatch({ type: "DELETE_REVIEW", review})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

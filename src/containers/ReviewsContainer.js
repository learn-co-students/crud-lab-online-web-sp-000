import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />

        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} restaurant={this.props.restaurant} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => ({

  reviews: state.reviews

})

const mapDispatchToProps = dispatch => ({
  addReview: (revObj) => dispatch({ type: "ADD_REVIEW", review: revObj }),

  deleteReview: (id) => dispatch({ type: "DELETE_REVIEW", id })


})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

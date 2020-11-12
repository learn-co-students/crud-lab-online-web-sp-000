import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { addReview, deleteRestaurant } from '../actions/index'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (reviewText) => {
      dispatch(addReview(reviewText))
    },
    deleteRestaurant: (restaurantId) => {
      dispatch(deleteRestaurant(restaurantId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)


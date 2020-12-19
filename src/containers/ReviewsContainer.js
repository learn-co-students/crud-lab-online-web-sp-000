import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { addReview, deleteReview } from '../actions/index'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    
    let relevantReviews = this.props.reviews.filter(function (review) {
      return review.restaurantId === this.props.restaurant.id
    }, this)

    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews restaurantId={this.props.restaurant.id} reviews={relevantReviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}


const mapDispatchToProps = dispatch => {
  return {
    addReview: (reviewText) => {
      dispatch(addReview(reviewText))
    },
    deleteReview: (reviewId) => {
      dispatch(deleteReview(reviewId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
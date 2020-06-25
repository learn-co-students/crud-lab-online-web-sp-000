import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    let filterReview = this.props.reviews.filter(review => review.restaurantId == this.props.restaurant.id)
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews reviews={filterReview} deleteReview={this.props.deleteReview} restaurant={this.props.restaurant}/>
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
    addReview: formData => dispatch({type: 'ADD_REVIEW', review: formData}),
    deleteReview: reviewId => dispatch({type: 'DELETE_REVIEW', payload: reviewId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

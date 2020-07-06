import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {


  getReviewsForRestaurant = () => {
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
  }
  
  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews reviews={this.getReviewsForRestaurant()} delete={this.props.deleteReview}/>
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
    addReview: review => dispatch({ type:'ADD_REVIEW', review }),
    deleteReview: reviewId => dispatch({ type:'DELETE_REVIEW', reviewId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  setRestaurantId = review => {
    review.restaurantId = this.props.restaurant.id
    return review
  }
  
  render() {
    return (
      <div>
        <ReviewInput addReview = {this.props.addReview} restaurant={this.props.restaurant} setRestaurantId={this.setRestaurantId} />
        <Reviews restaurant={this.props.restaurant} id={this.props.restaurant.id} reviews={this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return (
    {addReview: review => dispatch({type: 'ADD_REVIEW', review})}
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

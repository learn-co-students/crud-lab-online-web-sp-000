import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {
  render () {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}
        />
        <Reviews
          reviews={this.props.reviews}
          deleteReview={this.props.deleteReview}
        />
      </div>
    )
  }
}

const msp = state => ({ reviews: state.reviews })
const mdp = d => ({
  addReview: payload => d({ type: 'ADD_REVIEW', payload }),
  deleteReview: payload => d({ type: 'DELETE_REVIEW', payload })
})

export default connect(msp, mdp)(ReviewsContainer)

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
          reviews={this.props.reviews.filter(
            r => r.restaurantId === this.props.restaurant.id
          )}
          deleteReview={this.props.deleteReview}
        />
      </div>
    )
  }
}

const msp = state => ({ reviews: state.reviews })
const mdp = d => ({
  addReview: review => d({ type: 'ADD_REVIEW', review }),
  deleteReview: id => d({ type: 'DELETE_REVIEW', id })
})

export default connect(msp, mdp)(ReviewsContainer)

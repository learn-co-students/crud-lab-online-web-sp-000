import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {
  render() {
    const { restaurant, reviews, addReview, deleteReview } = this.props
    return (
      <div>
        <ReviewInput
          restaurantId={restaurant.id}
          addReview={addReview} />
        <Reviews
          reviews={reviews}
          restaurantId={restaurant.id}
          deleteReview={deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: 'ADD_REVIEW', review }),
  deleteReview: id => dispatch({ type: 'DELETE_REVIEW', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

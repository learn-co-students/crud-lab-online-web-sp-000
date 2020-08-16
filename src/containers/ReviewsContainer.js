import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import { addReview } from '../actions/addReview'
import { deleteReview } from '../actions/deleteReview'
import Restaurant from '../components/restaurants/Restaurant';

class ReviewsContainer extends Component {

  render() {
    const { restaurant, addReview, reviews, deleteReview } = this.props
    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurant.id} />
        <Reviews reviews={reviews} restaurant={restaurant} deleteReview={deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
  addReview: (data) => dispatch(addReview(data)),
  deleteReview: (id) => dispatch(deleteReview(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

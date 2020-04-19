import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    const { addReview, restaurant, reviews, deleteReview} = this.props;
    return (
      <div>
        <ReviewInput 
          addReview={addReview}
          restaurantId={restaurant.id}
        />
        <Reviews
          reviews={reviews}
          restaurantId={restaurant.id}
          deleteReview={deleteReview}
        />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: 'ADD_REVIEW', review}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)


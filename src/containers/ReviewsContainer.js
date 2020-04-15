import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import Restaurant from '../components/restaurants/Restaurant'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={reviewText => this.props.addReview(reviewText)}/>
        <Reviews reviews={this.props.reviews} deleteReview={(reviewId) => this.props.deleteReview(reviewId)}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addReview: (reviewText) => dispatch({review: reviewText, type:'ADD_REVIEW'}),
    deleteReview: reviewId => dispatch({type: 'DELETE_REVIEW', reviewId: reviewId})
  }
}

const mapStateToProps = (state, props) => {
  return{
    reviews: state.reviews.filter(rev => rev.restaurantId === props.restaurant.id)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

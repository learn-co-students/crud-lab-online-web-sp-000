import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    const restaurantId = this.props.restaurant.id;
    // const reviews = this.props.reviews.filter(review => review.restaurantId = restaurantId);
    // console.log('reviews for this: ', reviews);
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={restaurantId}
        />
        <Reviews reviews={this.props.reviews}
        restaurantId={restaurantId}
        deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({type: 'ADD_REVIEW', review}),
    deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
  }
}

const mapStateToProps = state => {
  return {reviews: state.reviews}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

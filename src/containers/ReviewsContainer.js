import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {
  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    console.log(this.props.restaurantId)
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews = {reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => ({
    addReview: review => dispatch({ type: "ADD_REVIEW", review: review}),
    deleteReview: review => dispatch({type: "DELETE_REVIEW", review: review})
})
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

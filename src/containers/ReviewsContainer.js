import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.props.reviews} restaurant={this.props.restaurant} delete={this.props.delete}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { reviews: state.reviews }
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review }),
  delete: reviewID => dispatch({type: 'DELETE_REVIEW', id: reviewID })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    const { reviews, restaurantId, addReview } = this.props
    return (
      <div>
        <ReviewInput restaurantId={restaurantId} addReview={addReview} />
        <Reviews deleteReview={this.props.deleteReview} reviews={reviews.filter(r => r.restaurantId === restaurantId)}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text, restaurantId) => dispatch({
      type: 'ADD_REVIEW', 
      review: {text: text, restaurantId} 
    }),
      deleteReview: (id) => dispatch({
        type: 'DELETE_REVIEW', id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

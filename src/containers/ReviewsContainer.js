import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    const {restaurantId, addReview, deleteReview} = this.props
    // const reviews = this.props.reviews.filter( r => r.restaurantId === restaurantId )
    const reviews = this.props.reviews
    return (
      <div>
        <ReviewInput restaurantId={restaurantId} addReview={addReview} />
        <Reviews restaurantId={restaurantId} reviews={reviews} deleteReview={deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})
const mapDispatchToProps = (dispatch) => ({
  addReview: (text, restaurantId) => dispatch({ type: "ADD_REVIEW", text, restaurantId }),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

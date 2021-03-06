import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'
class ReviewsContainer extends Component {
  render() {
    const { addReview, removeReview, restaurant, reviews } = this.props;
    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurant.id} />
        <Reviews removeReview={removeReview} reviews={reviews.filter(r => r.restaurantId === restaurant.id)} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({type: 'ADD_REVIEW', review: review}),
    removeReview: review => dispatch({type: 'DELETE_REVIEW', payload: review})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
// nested in restaurant
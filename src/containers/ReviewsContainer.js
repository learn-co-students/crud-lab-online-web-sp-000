import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    )
  }
}
// const mapDispatchToProps = dispatch => ({
//   addResturant: name => dispatch({ type: "ADD_RESTURANT", name}),
//   deleteResturant: id => dispatch({ type: "DELETE_RESTURANT", id }),
//   addReview: resturant_id => dispatch({ type: "ADD_REVIEW", resturant_id }),
//   deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
// })
export default ReviewsContainer;

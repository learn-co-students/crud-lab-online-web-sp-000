import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {

    const reviews = this.props.reviews.filter(review => (review.restaurantId === this.props.restaurant.id));

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={reviews} deleteReview={this.props.deleteReview}/>
        {console.log(reviews)}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (review) => { dispatch({ type: "ADD_REVIEW", review }) }, 
    deleteReview: (id) => { dispatch({ type: "DELETE_REVIEW", id })}
}
}

const mapStateToProps = state => {
  return ({
    reviews: state.reviews
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

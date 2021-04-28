import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}


// Why do I tend to write these map function as constants with arrow function expressions? does it have something to do with binding? Also, why do we wrapt the brackets in parentheses

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: "ADD_REVIEW", review}),
  deleteReview: reviewId => dispatch({type: "DELETE_REVIEW", reviewId})
})

const mapStateToProps = state => ({
  reviews: state.reviews
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

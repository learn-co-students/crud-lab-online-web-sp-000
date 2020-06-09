import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurant.id}/>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    reviews: state.reviews
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    addReview: review => {
      dispatch({ type: 'ADD_REVIEW', review });
    },
    deleteReview: id => {
      dispatch({ type: 'DELETE_REVIEW', id });
    }
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

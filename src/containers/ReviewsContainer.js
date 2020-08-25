import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurantId}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => dispatch({type: 'ADD_REVIEW', review: review}),
    deleteReview: (id) => dispatch({type: 'DELETE_REVIEW', id: id})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

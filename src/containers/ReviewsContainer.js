import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'
import {addReview, removeReview} from '../actions/resturants'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId = {this.props.restaurantId} addReview = {this.props.addReview} />
        <Reviews removeReview = {this.props.removeReview} reviews = {this.props.reviews.filter(r=>r.restaurantId===this.props.restaurantId)}/>
      </div>
    )
  }
}

export default connect((state)=>({reviews: state.reviews}), {addReview, removeReview}) (ReviewsContainer);

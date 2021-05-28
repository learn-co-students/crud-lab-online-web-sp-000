import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'

import {addReview} from '../actions/reviews.js'
import {removeReview} from '../actions/reviews.js'

class ReviewsContainer extends Component {

 

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} removeReview={this.props.removeReview} restaurantId={this.props.restaurantId}/>
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
  return{
    addReview: review => dispatch(addReview(review)),
    removeReview: review => dispatch(removeReview(review)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ReviewsContainer);

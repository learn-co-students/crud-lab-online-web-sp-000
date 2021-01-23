import React, { Component } from 'react';
import {connect} from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews restaurantId={this.props.restaurant.id} deleteReview={this.props.deleteReview} reviews={this.props.reviews}/>
      </div>
    );
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: 'ADD_REVIEW', review}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
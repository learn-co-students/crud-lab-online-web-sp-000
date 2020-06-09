import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews} delete={this.props.delete} restaurantId={this.props.restaurant.id}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: formData => dispatch({type: 'ADD_REVIEW', review: formData}),
    delete: id => dispatch({type: 'DELETE_REVIEW', payload: id})
  }
}

const mapStateToProps = state => {
  
  return {reviews: state.reviews}
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

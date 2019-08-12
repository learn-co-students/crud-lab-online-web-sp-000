import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews restaurant={this.props.restaurant} delete={this.props.delete}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: formData => dispatch({type: 'ADD_REVIEW', payload: formData}),
    delete: id => dispatch({type: 'DELETE_REVIEW', payload: id})
  }
}

const mapStateToProps = state => {
  
  return {reviews: state.restaurants}
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

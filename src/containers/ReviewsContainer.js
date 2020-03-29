import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} restaurant={this.props.restaurant} addReview={this.props.addReview}/>
        <Reviews restaurant={this.props.restaurant} reviews={this.props.reviews} removeReview={this.props.removeReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return({
    addReview: review => dispatch({type: 'ADD_REVIEW', review}),
    removeReview: id => dispatch({type: 'DELETE_REVIEW', id})
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
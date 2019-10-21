import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews deleteReview={this.props.deleteReview} restaurant={this.props.restaurant} reviews={this.props.reviews} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    reviews: state.reviews
  }
}

// store.dispatch({ type: 'ADD_REVIEW', review: { text: "Was great", restaurantId } })

function mapDispatchToProps(dispatch){
  return {
    addReview: (id, text) => dispatch({ type: 'ADD_REVIEW', review: { text: text, restaurantId: id }}),
    deleteReview: (id) => dispatch({ type: 'DELETE_REVIEW', id: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

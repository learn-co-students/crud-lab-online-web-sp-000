import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews restaurant={this.props.restaurant} reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurant.id} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    reviews: state.reviews
  })
}

const mapDispatchToProps = (dispatch) => {
  //{text: text, restaurantId: restaurant.id, id}
  //? allreviews: [] or restaurants:[{text, id, reviews: []}]
  return({
    addReview: (review) => dispatch({type: 'ADD_REVIEW', review}),
    deleteReview: (id) => dispatch({type: 'DELETE_REVIEW', id})
  })
} 

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
//this.props.restaurant
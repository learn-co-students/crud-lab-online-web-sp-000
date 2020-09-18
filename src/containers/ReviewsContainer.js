import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews reviews={this.props.state.reviews} restaurant={this.props.restaurant} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text, id) => { dispatch({ type: 'ADD_REVIEW', review: { text: text, restaurantId: id } }) },
    deleteReview: id => { dispatch({ type: 'REMOVE_REVIEW', id: id }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
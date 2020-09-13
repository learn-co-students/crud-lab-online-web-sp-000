import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} addReview={this.props.addReview}/>
        <Reviews restaurant={this.props.restaurant} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

export default ReviewsContainer

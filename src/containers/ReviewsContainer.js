import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurantId} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text, restaurantId) => dispatch({
      type: 'ADD_REVIEW', 
      review: {
        text: text,
        restaurantId: restaurantId
      }
    })
  }
}
export default connect(null, mapDispatchToProps)(ReviewsContainer)

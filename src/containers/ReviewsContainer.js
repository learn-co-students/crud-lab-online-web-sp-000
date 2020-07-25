import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput review={this.props.addReview} restaurantId={this.props.restaurant.id} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.props.reviews} restaurant={this.props.restaurant} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: review => dispatch({ type: 'ADD_REVIEW'}, review)
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

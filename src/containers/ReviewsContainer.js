import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {addReview, deleteReview} from '../actions/actions'

class ReviewsContainer extends Component {

  render() {
    const restaurantId = this.props.restaurant.id;
    // console.log('reviews for this: ', reviews);
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={restaurantId}
        />
        <Reviews reviews={this.props.reviews}
        restaurantId={restaurantId}
        deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {reviews: state.reviews}
}

export default connect(mapStateToProps, {addReview, deleteReview})(ReviewsContainer)

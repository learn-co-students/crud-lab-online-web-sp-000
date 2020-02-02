import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
class ReviewsContainer extends Component {
  filterReviews = () => {
    //console.log(this.props.reviews)
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  }
//props restaurant
  render() {
    //console.log(this.props.reviews);
    //console.log(this.filterReviews());
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}
        />
        <Reviews
          reviews={this.filterReviews()}
          deleteReview={this.props.deleteReview}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    reviews: state.reviews
})

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review }),
  deleteReview: payload => dispatch({ type: "DELETE_REVIEW", payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

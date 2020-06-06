import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'


class ReviewsContainer extends Component {

  render() {
    // restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} delete={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: "ADD_REVIEW", review}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id: id})
})
//export default ReviewsContainer
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

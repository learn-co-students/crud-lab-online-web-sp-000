import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

export class ReviewsContainer extends Component {



  render() {
    const restaurantReviews = this.props.reviews.filter(review =>{
      return review.restaurantId === this.props.restaurantId
    })

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId} review={this.props.review} />
          <Reviews reviews={restaurantReviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => ({
  addReview: (review) => dispatch({type: "ADD_REVIEW", review}),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

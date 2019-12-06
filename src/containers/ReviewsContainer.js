import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  
  render() {
    const filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return (
      
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={filteredReviews} delete={this.props.delete}/>     
      </div>
      
     
    )
  }
}

const mapStateToProps = (state) => {
  return {reviews: state.reviews} 
}

const mapDispatchToProps = dispatch => ({
  addReview: review => {console.log("in add review", review); dispatch({ type: "ADD_REVIEW", review })},
  delete: review => dispatch({type: 'DELETE_REVIEW', review })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)



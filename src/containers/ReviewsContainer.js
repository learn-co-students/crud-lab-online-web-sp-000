import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
   console.log(this.props.reviews)
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews});

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId) => dispatch({type: 'ADD_REVIEW', text, restaurantId}),
  deleteReview: restaurantId => dispatch({type: 'DELETE_REVIEW', restaurantId})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

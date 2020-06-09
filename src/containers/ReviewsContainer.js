import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
// this.props.restaurant -> deleteRest: ƒ deleteRest(id) id: "ck2n7r2ds00003a5yy0x2zsyt" text: "sdf
      <div>
        <ReviewInput
        addReview={this.props.addReview}
        restaurantId={this.props.restaurant.id} //promjenio u props u inputu pa sad salje
        />
        <Reviews
        reviews={this.props.reviews}
        deleteReview={this.props.deleteReview}
        restaurantId={this.props.restaurant.id} //ovdje salje ID
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews
});

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: 'ADD_REVIEW', review}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
})

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)

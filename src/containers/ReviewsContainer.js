import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}
          />
        <Reviews
          testProp ={console.log("ChrisD")}
          reviews={this.props.reviews}
          restaurantId={this.props.restaurant.id}
          deleteReview={this.props.deleteReview}
          />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({ reviews })

const mapDispatchToProps = dispatch => ({
 addReview: review => dispatch({ type: "ADD_REVIEW", review }),   ///we can safely assume that our store will know how to deal with this action
 deleteReview: id => dispatch({type: "DELETE_REVIEW", id})    ///and what to do with it
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

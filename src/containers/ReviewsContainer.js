import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';
import { addReview, deleteReview } from '../actions/reviews'

class ReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      funreviews: this.props.allReviews
    }
  }
  filterReviews = () => {
    console.log(this.state.funreviews)
    return (
      this.props.allReviews.filter( review =>
        { return this.props.restaurant.id === review.restaurantId})
    )
  }
  render() {
    //reviewS render a list of review, passing down the relevant data
    //reviewscontainer receive this props: restaurant.
    //reviewscontainer connects to state to get reviews and dispatch
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} restaurant={this.props.restaurant} addReview={this.props.addReview} />
        <Reviews reviews={this.filterReviews()} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { allReviews: state.reviews }
};


export default connect(mapStateToProps, { addReview, deleteReview })(ReviewsContainer);

import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {


    return (
      <div>
        <ReviewInput
        restaurantId={this.props.restaurant.id} 
        addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews}
          restaurantId={this.props.restaurant.id} 
        deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const msp = state => {
  return{
    reviews: state.reviews
  }
}

const mdp = dispatch => {
  return {
    addReview: (rev) => dispatch({type: 'ADD_REVIEW', payload: rev}),
    deleteReview: id => dispatch({type: 'DELETE_REVIEW', payload: id})
  }
}

export default connect(msp, mdp)(ReviewsContainer);

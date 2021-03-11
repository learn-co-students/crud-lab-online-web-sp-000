import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {


  matchedReview = () => this.props.reviews.map(review => {
    // console.log('review id', review.id)
    //   console.log('restaurantID', this.props.restaurantId)
    if(review.restaurantId === this.props.restaurantId) {
      
      return <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>
    }
    else {
      return null
    }
  })

  

  render() {

    return (
      <ul>
        {/* <h1>Reviews</h1> */}
        {this.matchedReview()}
      </ul>
    );
  }
};

export default Reviews;
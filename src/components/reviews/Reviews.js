import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
//    console.log (this.props.deleteReview)
    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={this.props.deleteReview}/>
    })
    // const reviewList = null
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
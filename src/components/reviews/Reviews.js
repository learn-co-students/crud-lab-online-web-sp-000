import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

   




  render() {

    const {reviews, restaurantId, deleteReview} =this.props


    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId) 
  
    let review = associatedReviews.map((review)=> <Review review={review} key={review.id} delete ={deleteReview}/>)

    return (
      <ul>
        Reviews
        {review}
      </ul>
    );
  }
};

export default Reviews;
import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  
  
  
  render() {
     const relatedReviews = this.props.reviews.filter(r=>r.restaurantId ===this.props.restaurantId);
     const reviewList = relatedReviews.map((r,id)=>{
         return <Review deleteReview={this.props.deleteReview} key={id} review={r}/>
     })
     debugger;
     return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
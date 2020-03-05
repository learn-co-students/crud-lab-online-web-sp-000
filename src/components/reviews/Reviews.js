import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  
  
  
  render() {
     const relatedReviews = this.props.reviews.filter(r=>r.restaurantId ===this.props.restaurantId);
    return (
      <ul>
        {relatedReviews.map(r=><Review deleteReview={this.props.deleteReview} key={r.id} review={r}/>)}
      </ul>
    );
  }
};

export default Reviews;
import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    
    const filteredReviews = reviews.filter(r => r.restaurantId === restaurantId)
    
    const reviewList = filteredReviews.map((r) => {
      return <Review key={r.id} review={r} delete={deleteReview}/>
    })

    return (
      <ul>
        {reviewList}
        {/* {this.props.reviews.map(r => <Review key={r.id} review={r} delete={this.props.deleteReview}/>)} */}
      </ul>
    );
  }
};

export default Reviews;
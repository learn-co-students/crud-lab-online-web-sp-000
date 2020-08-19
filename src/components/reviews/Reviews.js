import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    // const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    // debugger
    // const reviewList = associatedReviews.map((review) => {
    //   return <Review key={review.id} review={review} delete={this.props.deleteReview}/>;
    // });

    return (
      <ul>
        {/* {reviewList} */}
        {this.props.reviews.map(r => <Review key={r.id} review={r} delete={this.props.deleteReview}/>)}
      </ul>
    );
  }
};

export default Reviews;
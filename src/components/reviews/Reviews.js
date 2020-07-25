import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
console.log(this.props.reviews)
    const showReviews = this.props.reviews.map((review, id) => <Review key={id} review={review}/>)

    return (
      <ul>
        {/* {this.showReviews} */}
      </ul>
    );
  }
};

export default Reviews;
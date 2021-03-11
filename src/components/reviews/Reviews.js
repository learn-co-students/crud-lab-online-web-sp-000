import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    let reviews = this.props.reviews.map((review, id)=> <Review key={id} review={review} deleteReview={this.props.deleteReview}/>)

    return (
      <ul>
        {/* <h1>Reviews</h1> */}
        {console.log(this.props.reviews)}
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
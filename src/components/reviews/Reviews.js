import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

   




  render() {

    let review = this.props.reviews.map((review)=> <Review review={review}/>)

    return (
      <ul>
        Reviews
        {review}
      </ul>
    );
  }
};

export default Reviews;
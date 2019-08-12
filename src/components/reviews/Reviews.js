import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    
    return (
      <ul>
        {this.props.restaurant.review.map(review => {
          return <Review review={review}/>
        })}
      </ul>
    );
  }
};

export default Reviews;
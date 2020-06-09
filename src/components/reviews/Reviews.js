import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    console.log("REviews props: ", this.props)
    const reviews = this.props.reviews.map((review, id) => <Review key = {id} review = {review} delete = {this.props.delete}/>)
    return (
      <ul>
        {reviews}
      </ul>
    );
  } 
};

export default Reviews;
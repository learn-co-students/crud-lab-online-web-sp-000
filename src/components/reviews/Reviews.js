import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {
          this.props.reviews.map(review =><li key={review.id}><Review delete={this.props.delete} key={review.id} review={review} /></li>)
        }
        {
          //console.log(this.props)
        }
      </ul>
    );
  }
};

export default Reviews;
import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => this.props.reviews.map(r=><Review deleteReview={this.props.deleteReview} key={r.id} review={r}/>)
  
  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => {
    // console.log('im in renderreviews')
    return (this.props.reviews.map(review => <Review review={review} deleteReview={this.props.deleteReview}/>))
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
        {/* {console.log(this.props.reviews)} */}
      </ul>
    );
  }
};

export default Reviews;
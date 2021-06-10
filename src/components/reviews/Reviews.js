import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderRest() {
    return this.props.reviews
        .map((e, idx) => <Review key={idx} review={e}
                                 deleteReview={this.props.deleteReview}/>)
  }

  render() {
    return (
      <ul>
        {this.renderRest()}
      </ul>
    );
  }
};

export default Reviews;
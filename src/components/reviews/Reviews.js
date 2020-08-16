import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews } = this.props
    const renderReviews = reviews.map((rev, idx) => <Review key={idx} review={rev} delete={this.props.delete} />)

    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
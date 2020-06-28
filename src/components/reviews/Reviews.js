import React, { Component } from 'react';
import { connect } from 'react-redux'
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => this.props.reviews.map(review =>
    <Review
      key={review.id}
      id={review.id}
      restaurantId={this.props.restaurantId}
      text={review.text}
      deleteReview={this.props.deleteReview}
    />
  )

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteReview: (id, restaurantId) => dispatch({
      type: 'DELETE_REVIEW', 
      restaurantId: restaurantId,
      id: id
    })
  }
}

export default connect(null, mapDispatchToProps)(Reviews);
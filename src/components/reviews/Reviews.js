import React, { Component } from 'react';
import Review from './Review';
import {connect} from 'react-redux';

class Reviews extends Component {
  renderReviews = () => this.props.reviews.filter((review) => review.restaurantId === this.props.restaurantId).map((review) => < Review key={review.id} delete = {
      this.props.deleteReview
    }
    review = {
      review
    }/>)

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);

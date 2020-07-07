import React, { Component } from 'react';
import Review from './Review';
import {connect} from 'react-redux'

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews
          .filter(review => review.restaurantId === this.props.id)
          .map(review => <Review review={review} restaurantId={review.restaurantId}/>)
        }
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Reviews);
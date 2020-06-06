import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  //
  render() {
    //{this.props.restaurants.map(r => <Restaurant key={r.id} restaurant={r} delete={this.props.deleteRestaurant}/>)}
    const filtered = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    console.log('Reviews, this.props', this.props)
    return (
      <ul>
        {filtered.map(r => <Review key={r.id} review={r} deleteReview={this.props.delete}/>)}
      </ul>
    );
  }
};

export default Reviews;
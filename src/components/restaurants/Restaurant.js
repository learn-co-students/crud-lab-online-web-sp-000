import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {console.log('now rendering restaurant', this.props)}
          <h3>{restaurant.text}</h3>
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant} addReview={this.props.addReview} deleteReview={this.props.deleteReview}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

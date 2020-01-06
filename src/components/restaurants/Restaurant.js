import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant, deleteRestaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={e => deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant} reviews={restaurant.reviews} />
        </li>
      </div>
    );
  }
};

export default Restaurant;

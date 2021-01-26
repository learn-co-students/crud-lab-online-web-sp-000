import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {
  render() {
    const {restaurant, removeRestaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick = {()=>{removeRestaurant(restaurant.id)}}> X </button>
          <ReviewsContainer restaurantId={restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

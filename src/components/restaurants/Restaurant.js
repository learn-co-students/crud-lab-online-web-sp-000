import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant, removeRestaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => {removeRestaurant(restaurant.id)}}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

// responsible for each individual restaurant.
// Users able to delete restaurants wire up the button
// give each restaurant an ID. 
// use the cuid library that we have already imported into the reducer file for you

// Restaurants stored in Redux should have text and id keys.
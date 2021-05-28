import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';



class Restaurant extends Component {

  deleteRestaurant = (restaurantId) => {
   this.props.deleteRestaurant(restaurantId)
  }
  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurantId={restaurant.id} restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

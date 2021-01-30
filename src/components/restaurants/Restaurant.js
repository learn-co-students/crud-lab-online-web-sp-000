import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import { Button } from '@material-ui/core';

class Restaurant extends Component {
  render() {
    const {restaurant, removeRestaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <Button color = "primary" onClick = {()=>{removeRestaurant(restaurant.id)}}> X </Button>
          <ReviewsContainer restaurantId={restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

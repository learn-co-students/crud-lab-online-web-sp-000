import React, { Component } from 'react';
import Restaurant from './Restaurant'
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => {
          return <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant} >
                      <ReviewsContainer restaurantId={restaurant.id} />
                 </Restaurant>
        })}
      </ul>
    );
  }
};

export default Restaurants;
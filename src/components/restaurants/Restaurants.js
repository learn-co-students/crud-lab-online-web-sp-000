import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        Restaurants Component
        {console.log('restaurants comp', this.props)}
        {this.props.restaurants.map (restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} addReview={this.props.addReview} deleteReview={this.props.deleteReview} /> )}
      </ul>
    );
  }
};

export default Restaurants;
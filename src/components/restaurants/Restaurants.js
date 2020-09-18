import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  //render all restaurants to the DOM by mapping through each restaurant, and establish the appropriate props
  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant =>
      <Restaurant key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant} restaurant={restaurant} />
    )
  }
  render() {
    return (
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
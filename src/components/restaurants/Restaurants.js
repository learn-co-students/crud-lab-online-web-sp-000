import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map( (restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.deleteRestaurant} />)

  render() {
    return(
      <ul>
      {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;

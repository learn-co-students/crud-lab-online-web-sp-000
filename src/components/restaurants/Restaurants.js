import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {
  renderRestaurants = () => this.props.restaurants.map(rest => <Restaurant key={rest.id} restaurant={rest} deleteRestaurant={this.props.deleteRestaurant}/>)
  render() {
    return(
      <ul>
        Restaurants Component
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants

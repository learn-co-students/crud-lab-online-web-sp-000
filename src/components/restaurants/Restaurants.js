import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {/* Restaurants Component */}
        {this.props.restaurants.map((restaurant, id)=> <Restaurant key={id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)}
      </ul>
    );
  }
};

export default Restaurants;
import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {/* <h1>Restaurants</h1> */}
        {this.props.restaurants.map((restaurant, id)=> <Restaurant key={id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)}
      </ul>
    );
  }
};

export default Restaurants;
import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurants.map((restaurant, index) => {
      return <Restaurant key={index} restaurant={restaurant} delete={this.props.delete} />
    }) 
    
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
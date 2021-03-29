import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {

    const restaurants = this.props.restaurants.map((restaurant, idx) => <li key={idx}><Restaurant thisRestaurant={restaurant} delete={this.props.deleteRestaurant}/></li>)
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
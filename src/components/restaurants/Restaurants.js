import React, { Component } from 'react';
import Restaurant from '../restaurants/Restaurant'
class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} delete={this.props.delete} key={restaurant.id}/>)}
      </ul>
    );
  }
};

export default Restaurants;
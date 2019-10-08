import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRestaurants = () => this.props.restaurants.map(restaurant => <Restaurant delete={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant}/>)//add delete
  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
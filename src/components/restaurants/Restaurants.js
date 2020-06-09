import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    const myRestaurants = this.props.restaurants && this.props.restaurants.map(restaurant => {
      return (
        <Restaurant key={restaurant.id} id={restaurant.id} restaurant={restaurant} deleteRestaurant = {this.props.deleteRestaurant}/>
      )
    })
    return(
        <ul>{myRestaurants}</ul>
    );
  }
};

export default Restaurants;

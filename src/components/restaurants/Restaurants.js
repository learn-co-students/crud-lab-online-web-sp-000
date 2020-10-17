import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const mapRestaurants = this.props.restaurants.map( restaurant => {
      if (restaurant.text) {
        return (<Restaurant restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
      }
    })

    return(
      <ul>
        {mapRestaurants}
      </ul>
    );
  }
};

export default Restaurants;
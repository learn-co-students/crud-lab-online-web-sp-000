import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  

  render() {
    // debugger
    const renderRestaurants = this.props.restaurants.map(restaurant => {
      return(<Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant} />)
    })
    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;
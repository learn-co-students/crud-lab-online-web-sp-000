import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  mapRestaurants = () => {
    return this.props.restaurants.map( restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>);
  }

  render() {
    return(
      <ul>
        {this.mapRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
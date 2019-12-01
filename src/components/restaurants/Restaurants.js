import React, { Component } from 'react';
import Restaurant from './Restaurants';

class Restaurants extends Component {

  renderRestaurants = () => {
    console.log(this.props.restaurants);
    return this.props.restaurants.map(restaurant => <Restaurant name={restaurant.name} /> )
        // return( <div>{restaurant.name}</div> );
  }


  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;

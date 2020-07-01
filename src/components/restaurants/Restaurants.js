import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    let allRestaurants = this.props.restaurants.map((restaurant) => {
      return( <Restaurant restaurant={restaurant} /> )  
    })


    return(
      <div>
      <ul>
        Restaurants Component
        {allRestaurants}
      </ul>
      </div>
    );
  }
};

export default Restaurants;
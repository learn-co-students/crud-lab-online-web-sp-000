import React, { Component } from 'react';
import Restaurants from '../restaurants/Restaurant.js'



class Restaurants extends Component {
 restaurants = this.props.restaurants.map((restaurant,id) => <Restaurant key={id} text={restaurant}/>)




  render() {
    return(
      <ul>
      <li>{this.restaurants}</li>
      </ul>
    );
  }
};

export default Restaurants;
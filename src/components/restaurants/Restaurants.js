import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  renderRestaurants = () =>{
    return this.props.restaurants.map(r=><Restaurant deleteRestaurant={this.props.deleteRestaurant} key={r.id} restaurant={r}/>)
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
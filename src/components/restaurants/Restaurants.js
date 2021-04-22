import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {
          this.props.restaurants.map(restaurant => <li key={restaurant.id}><Restaurant delete={this.props.delete} key={restaurant.id} restaurant={restaurant} /></li>)
        }
        {
          //console.log(this.props.restaurants.restaurants)
        }
      </ul>
    );
  }
};

export default Restaurants;
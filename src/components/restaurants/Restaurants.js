import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map( restaurant => (
          <Restaurant text={restaurant.text} id={restaurant.id} key={restaurant.id}/>
        ))}
        
      </ul>
    );
  }
};

export default Restaurants;
import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(rest => {
          return (
            <Restaurant key={rest.id} restaurant={rest} deleteRestaurant={(id) => this.props.deleteRestaurant(id)} />
          )
        })}
      </ul>
    );
  }
};

export default Restaurants;
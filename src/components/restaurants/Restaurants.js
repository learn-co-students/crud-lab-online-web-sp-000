import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const restList = this.props.restaurants.map(r => {
      return <Restaurant restaurant={r} key={r.id} deleteRestaurant={this.props.deleteRestaurant} />
    })
    return(
      <ul>
        {restList}
      </ul>
    );
  }
};

export default Restaurants;
import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  renderRestaurants = () => {
    const array = this.props.restaurants
    return array.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
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
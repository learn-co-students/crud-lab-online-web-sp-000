import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  showRestaurants = () => {
    if(this.props.restaurants.length !== 0) {
      return this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} handleClick={this.handleClick}/>)
    }
  }

  handleClick = (id) => {
    this.props.removeRestaurant(id)
  }

  render() {
    return(
      <ul>
        {this.showRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
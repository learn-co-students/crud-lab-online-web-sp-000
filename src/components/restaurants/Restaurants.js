import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  listRestaurants = () => this.props.restaurants.map( restaurant => <Restaurant restaurant={restaurant} delete={this.props.delete} /> )

  render() {
    //console.log("props: ", this.props)
    return(
      <ul>
        Restaurants Component
        {this.listRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
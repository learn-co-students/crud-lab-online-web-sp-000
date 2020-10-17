import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    {console.log(this.props.restaurants)}
    const mapRestaurants = this.props.restaurants.map( restaurant => {
      return (<Restaurant restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
    })

    return(
      <ul>
        {mapRestaurants}
      </ul>
    );
  }
};

export default Restaurants;
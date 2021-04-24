import React, { Component } from 'react';
import Restaurant from './Restaurant';


class Restaurants extends Component {

  renderRestaurants = () => {

    return this.props.restaurants.map( rest => { return (
      <Restaurant
        restaurant={rest}
        key={rest.id}
        deleteRestaurant={this.props.deleteRestaurant}
      />
    )})

  }


  render() {
    return(
      <ul>
        Restaurants Component
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;

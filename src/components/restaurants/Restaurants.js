import React, { Component } from 'react';

class Restaurants extends Component {

  restaurants = props => {
    return props.restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} 
      deleteRestaurant={props.deleteRestaurant}/>)
  }

  render() {
    return(
      <ul>
        Restaurants Component
        {this.restaurants}
      </ul>
    );
  }
};

export default Restaurants;
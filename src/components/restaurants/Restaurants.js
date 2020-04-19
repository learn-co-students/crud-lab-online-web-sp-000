import React, { Component } from 'react';
import Resturant from "./Restaurant";

class Restaurants extends Component {
  render() {

    return(
      <ul>
        {this.props.restaurants.map((restaurant) => <Resturant
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={this.props.deleteRestaurant}
        />)}
      </ul>
    );
  }
};

export default Restaurants;
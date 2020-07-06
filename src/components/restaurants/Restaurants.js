import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  renderRestaurants = () => {
    console.log(`rendering ${this.props.restaurants.length} restaurants`)
    return this.props.restaurants.map(
      restaurant => {
        return (
          <Restaurant 
            key={restaurant.id}
            restaurant={restaurant}
            delete={this.props.delete}
          />
        )
    })
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
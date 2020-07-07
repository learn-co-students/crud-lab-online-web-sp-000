import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.storedRestaurants.map(storedRestaurant => (
          <Restaurant 
            key={storedRestaurant.id} 
            restaurant={storedRestaurant}
            deleteRestaurant={this.props.deleteRestaurant}/>
        ))}
      </ul>
    );
  }
};

export default Restaurants;
import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    const renderRestaurants = this.props.restaurants.map( r => {
      return <Restaurant 
                key={r.id} 
                restaurant={r}  
                deleteRestaurant={this.props.deleteRestaurant} /> 
    })

    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;
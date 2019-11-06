import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

   allRestaurants = () => {
    return this.props.restaurants.map( rest => <Restaurant key={rest.id} restaurant={rest} deleteRest={this.props.deleteRest}/>)
   } // restaurant={rest} to mi je omogucilo u restaurant.js { restaurant }



  render() {
    return(
      <div>{this.allRestaurants()}</div>
    );
  }
};

export default Restaurants;

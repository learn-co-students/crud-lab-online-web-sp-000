import React, { Component } from 'react';
import {connect} from 'react-redux';
import Restaurant from './Restaurant'

import {removeRestaurant} from '../../actions/resturants'

class Restaurants extends Component {
  render() {
    
    return(
      <ul>
        {this.props.restaurants && this.props.restaurants.map(restaurant => <Restaurant key = {restaurant.id} restaurant = {restaurant} removeRestaurant = {this.props.removeRestaurant}/>)}
        
      </ul>
    );
  }
};

export default connect((state) =>({restaurants: state.restaurants}), {removeRestaurant})(Restaurants);
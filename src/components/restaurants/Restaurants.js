import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRests = () => this.props.restaurants.map( (restaurant) => < Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.delete} />)
  

  render() {
    return(
      <ul>
      {this.renderRests()}
      </ul>
    );
  }
};

export default Restaurants;
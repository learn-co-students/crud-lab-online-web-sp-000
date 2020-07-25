import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  renderTexts = () => {
    console.log(this.props)
    this.props.restaurants.map((restaurant) => <Restaurant id={restaurant.id} restaurant={restaurant.text}/>)
  }

  render() {
    return(
      <ul>
        Restaurants Component
        <div>{this.renderTexts()}</div>
      </ul>
    );
  }
};

export default Restaurants;
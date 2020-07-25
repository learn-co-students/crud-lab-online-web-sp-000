import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {  

  render() {
    const renderTexts = this.props.restaurants.map((restaurant, id) => <Restaurant delete={this.props.delete} key={id} restaurant={restaurant}/>)
    return(
      <ul>
        Restaurants Component
        <div>{renderTexts}</div>
      </ul>
    );
  }
};

export default Restaurants;
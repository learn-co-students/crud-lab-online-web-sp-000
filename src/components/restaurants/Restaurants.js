import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {

    const { restaurants } = this.props
    const renderRestaurants = restaurants.map((rest, idx) => <Restaurant key={idx} restaurant={rest} delete={this.props.delete} />)

    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;
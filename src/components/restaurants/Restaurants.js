import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    console.log('this.props', this.props)
    return(
      <ul>
        {this.props.restaurants.map(restaurant => {
          return <Restaurant
            key={restaurant.id}
            restaurant={restaurant}/>
        })}
      </ul>
    );
  }
};

export default Restaurants;
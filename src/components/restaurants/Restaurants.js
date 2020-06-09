import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    //debugger;
    const restaurants = this.props.restaurants.map(r => {return <Restaurant restaurant={r} key={r.id} delete={this.props.delete}/>})
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
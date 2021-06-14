import React, { Component } from "react";
import Restaurant from '../restaurants/Restaurant.js'

class Restaurants extends Component {
  render() {
    return (
      <ul>
        {this.props.restaurants.map((rest) => (
          <Restaurant key={rest.id} restaurant={rest} delete={this.props.dispatchDelete}/>
        ))}
      </ul>
    );
  }
}

export default Restaurants;

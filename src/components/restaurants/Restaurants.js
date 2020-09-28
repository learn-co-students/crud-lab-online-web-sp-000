import React, { Component } from 'react';




class Restaurants extends Component {
//  restaurants = this.props.restaurants.map((restaurant,id) => <Restaurant key={id} text={restaurant}/>)




  render() {
    return(
      <ul>
      <li>{this.restaurants}</li>
      </ul>
    );
  }
};

export default Restaurants;
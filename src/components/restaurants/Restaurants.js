import React, { Component } from 'react';
import Restaurant from './Restaurant';


class Restaurants extends Component {


  render() {
    

    const { restaurants, deleteRestaurant } = this.props;
     

    const allRestaurants = restaurants.map(r => {
      return (
        <Restaurant 
          key={r.id}
          id={r.id}
          restaurant={r}
          text={r.text}
          deleteRestaurant={deleteRestaurant} /> 
          )
    });


    return(

      <ul>
     	   {allRestaurants} 
      </ul>
    );
  }
};

export default Restaurants;
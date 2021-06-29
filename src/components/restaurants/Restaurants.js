import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRestaurant = () => {
    return this.props.restaurants.map((restaurant )=> {
        return (
           <Restaurant  key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>
        )
    })
  }
  

  render() {
    return(
      <div>
        <ul>
           {this.renderRestaurant()}
        </ul>
       
      </div>
 
    );
  }
};

export default Restaurants;
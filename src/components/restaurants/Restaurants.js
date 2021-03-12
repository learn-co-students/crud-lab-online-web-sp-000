import React, { Component } from 'react';
import Restaurant from './Restaurant';


class Restaurants extends Component {



  render() {
    return(
      <div>
        {this.props.restaurants.map(restaurant => 
          <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant}/>
        )}
      </div>
    );
  }
};

export default Restaurants;
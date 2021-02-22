import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
  	const restaurants = this.props.restaurants.map(r => {
			return (
				<Restaurant 
					restaurant={r} 
					key={r.id} 
					deleteRestaurant={this.props.deleteRestaurant} 
				/>
			)
		})
		
    return(
      <div>{restaurants}</div>
    );
  }
};

export default Restaurants;
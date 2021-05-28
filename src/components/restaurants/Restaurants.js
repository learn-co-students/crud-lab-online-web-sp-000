import React, { Component } from 'react';
import Restaurant from './Restaurant'
import {connect} from 'react-redux'

class Restaurants extends Component {

renderRestaurants = () => {
  console.log(this.props)
  return this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
}

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
        
      </ul>
    );
  }
};


const mapStateToProps = state => {
  console.log(state);
  return {
    restaurants: state.restaurants
  }
}


export default connect (mapStateToProps) (Restaurants);
//export default Restaurants;
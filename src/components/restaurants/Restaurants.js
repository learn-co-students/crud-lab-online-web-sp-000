import React, { Component } from 'react';
import Restaurant from './Restaurant';
import {connect} from 'react-redux';

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map((restaurant) => < Restaurant  key={restaurant.id} delete = {
      this.props.deleteRestaurant
    }
    restaurant = {
      restaurant
    }/>)

  render() {    return(
      <ul>
      {this.renderRestaurants()}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => ({
  deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);

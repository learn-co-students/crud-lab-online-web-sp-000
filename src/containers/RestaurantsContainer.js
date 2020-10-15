import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput newRest={this.props.addRest}/>
        <Restaurants allRests={this.props.rests} delRest={this.props.delRest}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  rests: state.restaurants
})

const mapDispatchToProps = dispatch => ({
  addRest: (restObj) => dispatch({ type: "ADD_RESTAURANT", text: restObj.text }),

  delRest: (id) => dispatch({ type: "DELETE_RESTAURANT", payload: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

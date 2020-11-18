import React, { Component } from 'react';
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />   {/* passing down addRestaurant (which is connected to the action below) */}
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant} />
        
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => ({ restaurants })

const mapDispatchToProps = dispatch => ({

 addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text }),
 deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

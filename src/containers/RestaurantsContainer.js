import React, { Component } from 'react'
import {connect} from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => {
  ({restaurants})
}

const mapDispatchToProps = dispatch => {
  return {addRestaurant: formData => {
      restaurants: [...this.state.restaurants, formData]
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)

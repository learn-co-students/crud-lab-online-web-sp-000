import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants delete={this.props.delete} restaurants={this.props.rest} />
      </div>
    )
  }
}

const mapStateToProps = ({rest}) => {
  return { rest }
}

const mapDispatchToProps = (dispatch) => ({
  addRestaurant: name => dispatch({type: "ADD_RESTAURANT", name}),
  delete: id => dispatch({type: "DELETE_RESTAURANT", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)

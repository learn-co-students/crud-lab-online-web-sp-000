import React, { Component } from 'react'
import {connect} from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput dispatch={this.props.dispatch}/>
        <Restaurants restaurants={this.props.restaurants} dispatch={this.props.dispatch}/>
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => {
  return ({restaurants})
}

//For a cleaner props experience, I deleted this bc I can just pass down dispatch as props and perform the action directly in the onSubmit or onClick callback on the <RestaurantInput /> and <Restaurant /> components.
// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
//     deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
//   }
// }

export default connect(mapStateToProps)(RestaurantsContainer)

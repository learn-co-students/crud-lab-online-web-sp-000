import React, { Component } from 'react'
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render () {
    return (
      <ul>
        {this.props.restaurants.map(r => (
          <Restaurant
            deleteRestaurant={this.props.deleteRestaurant}
            restaurant={r}
            key={r.id}
          />
        ))}
      </ul>
    )
  }
}

export default Restaurants

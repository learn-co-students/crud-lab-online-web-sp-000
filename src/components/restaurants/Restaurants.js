import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render () {
    console.log(this.props.restaurants)
    return (
      <div>
        {this.props.restaurants.map(x => {
          return (
            <Restaurant
              key={x.id}
              deleteRestaurant={this.props.deleteRestaurant}
              restaurant={x}
            />
          )
          })}
      </div>
    )
  }
}

export default Restaurants;

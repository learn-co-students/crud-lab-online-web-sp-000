import React, { Component } from 'react';
import Restaurant from './Restaurant'

// class Restaurants extends Component {
//   render() {
//     return(
//       <ul>
//         Restaurants Component
//       </ul>
//     );
//   }
// };

// const Restaurants = props => {
//   const restaurants = props.restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} deleteRestaurant={props.deleteRestaurant} />)


//   return (
//     <div>
//       {restaurants}
//     </div>
//   )
// }

class Restaurants extends Component {
  
  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => {
      return (
        <Restaurant
          deleteRestaurant={this.props.deleteRestaurant}
          key={restaurant.id}
          restaurant={restaurant}
        />
      )
    })
  }

  
  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
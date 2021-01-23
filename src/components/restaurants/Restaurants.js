import React, { Component } from 'react';
import Restaurant from './Restaurant'


// const Restaurants = props => {
//   const restaurants = props.restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} deleteRestaurant={props.deleteRestaurant}/>)

//   // render() {
//     return(
//       <ul>
//         {restaurants}
//       </ul>
//     );
//   // }
// };

// export default Restaurants;

class Restaurants extends Component {

  render() {
    const { restaurants, deleteRestaurant } = this.props;
    const restaurantList = restaurants.map(restaurant => {
      return (
        <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={deleteRestaurant}
        />
      )
    });

    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;
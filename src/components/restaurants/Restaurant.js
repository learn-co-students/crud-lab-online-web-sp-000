import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
class Restaurant extends Component {


  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(this.props.restaurant.id)}> DELETE </button>
          {<ReviewsContainer restaurantId={this.props.restaurant.id} />}
        </li>
      </div>
    );
  }
};

export default Restaurant;

// need to go ahead and updtate this
//    <RestaurantsContainer restaurant={this.props.restaurant}/>
// also need to see how to update the props passing in for restaraunt

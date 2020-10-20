import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick() {
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.handleOnClick()}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

//  Restaurant Component
// ✓ displays the appropriate text
// ✓ renders an li

//   Restaurant Component with Redux
// ✓ has the restaurant as a prop
// ✓ has a button that dispatches a DELETE_RESTAURANT action with the proper id when clicked
// ✓ updates the state of the store to remove the component
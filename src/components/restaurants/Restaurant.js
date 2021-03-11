import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleClick = () => {
    //event.preventDefault();
    //console.log(this.props.restaurant.id)
    this.props.deleteRestaurant(this.props.restaurant.id) 
  }

  render() {
    const { restaurant } = this.props;
    console.log(restaurant)

    return (
      <div>
        <li>
          {restaurant.text}
          <button type='delete' onClick={() => this.handleClick()}> X </button>  
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

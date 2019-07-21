import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

//onClick, access the delete method we wrote upstream in mapDispatchToProps. Another way is to pass down dispatch as props and handle the delete on the component. Doing it that way means you won't have to pass down a ton of methods as props.
handleOnClick = () => {
  console.log('DELETE_RESTAURANT: ', this.props.restaurant.id);
  this.props.dispatch({type: 'DELETE_RESTAURANT', id: this.props.restaurant.id})
}

  render() {
    const { restaurant } = this.props;
    console.log('Restaurant text: ', restaurant.text);
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleOnClick}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

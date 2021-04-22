import React, { Component } from 'react';
import uuid from 'uuid';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const restaurant = {...this.state, id: uuid() };
    this.props.addRestaurant(restaurant)
    this.setState({
      text: ''
    });
  }
  render() {
    return (
      <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    restaurantName: ''
  }

  handleOnChange(e) {
    this.setState({
      restaurantName: e.target.value,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.addRestaurant(this.state.restaurantName);
    this.setState({
      restaurantName: '',
    });
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <input
            type="text"
            value={this.state.restaurantName}
            onChange={(e) => this.handleOnChange(e)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

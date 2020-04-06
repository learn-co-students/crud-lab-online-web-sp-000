import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleOnSubmit} >
          <input type="text" onChange={this.handleOnChange}/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

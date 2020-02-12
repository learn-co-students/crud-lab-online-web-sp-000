import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  changeHandler = event => {
    this.setState({
      text: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" onChange={this.changeHandler} value={this.state.text}></input>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

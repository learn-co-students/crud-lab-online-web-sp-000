import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={this.handleOnChange} value={this.state.name}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

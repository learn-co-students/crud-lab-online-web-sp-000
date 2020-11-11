import React, { Component } from "react";

class RestaurantInput extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const text = this.state.text;
    this.props.addRestaurant(text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
          ></input>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;

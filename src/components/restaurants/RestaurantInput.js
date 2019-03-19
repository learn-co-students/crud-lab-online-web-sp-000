import React, { Component } from "react";

class RestaurantInput extends Component {
  state = { text: "" };

  handleChange = event => this.setState({ text: event.target.value });

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
  }

  render() {
    return (
      <div>
        Add a Restaurant:
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />{" "}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;

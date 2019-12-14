import React, { Component } from "react";

// create new restaurants
class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleInputChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={event => this.handleInputChange(event)}
            value={this.state.text}
          ></input>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;

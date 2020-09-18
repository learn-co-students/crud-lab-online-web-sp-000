import React, { Component } from "react";


class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  onChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: "",
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="text" onChange={this.onChange} value={this.state.text}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default RestaurantInput;

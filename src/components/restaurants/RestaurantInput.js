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

// RestaurantInput
//     1) has an text input field
//     2) has an initial state with text key set to empty string
//     3) changes the state with an onChange event
//     4) updates the state of the store after submitting the form
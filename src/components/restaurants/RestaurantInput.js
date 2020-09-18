import React, { Component } from "react";


class RestaurantInput extends Component {
  //Establish state.text
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  //onChange event sets state === the value entered in by user.
  onChange = event => {
    this.setState({
      text: event.target.value
    })
  }
  //On submit, we add a restaurant to our reducer via the state.text's property. Then, return our state back to being blank("")
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

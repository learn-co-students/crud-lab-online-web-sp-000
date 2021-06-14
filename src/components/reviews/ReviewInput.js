import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch(this.state.text, this.props.restaurantId)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        Create Review:
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;

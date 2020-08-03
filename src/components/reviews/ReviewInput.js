import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <p>
          <label for="text">Text:</label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
        </p>
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

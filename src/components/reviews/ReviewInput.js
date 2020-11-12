import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addReview(this.state.text)

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='text' value={this.state.text} onChange={this.handleChange}></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

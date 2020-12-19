import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

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
    debugger
    let arg = {text: this.state.text, restaurantId: this.props.restaurantId}
    this.props.addReview(arg)
    
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
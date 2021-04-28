import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid'

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview({...this.state, restaurantId: this.props.restaurantId, id: cuid()})
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.handleOnChange} value={this.state.text} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

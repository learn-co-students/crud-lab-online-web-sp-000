import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = { text: '' }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({ text: ''})
  }

  render() {
    return (
      <form onSubmit={ e => this.handleSubmit(e)}>
        <label>
          <input type='text' value={this.state.text} onChange={e => this.handleChange(e)}/>
        </label>
        <input type='submit'/>
      </form>
    );
  }
};

export default RestaurantInput;

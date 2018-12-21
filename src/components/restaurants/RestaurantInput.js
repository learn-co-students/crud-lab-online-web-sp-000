import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={ (event) => this.handleSubmit(event)}>
          <label>Restaurant:</label>
          <input
            placeholder='Enter Restaurant Name'
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

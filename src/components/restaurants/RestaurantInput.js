import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  };

  formSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    })
  };

  whenChange = event => {
    this.setState({
      text: event.target.value
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.formSubmit(event)}>
          <input type="text" onChange={event => this.whenChange(event)} value={this.state.text} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

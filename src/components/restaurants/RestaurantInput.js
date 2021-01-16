import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
          type="text"
          name="name"
          value={this.state.text}
          onChange={this.handleOnChange}/>
          <input
          type="submit"
          value="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

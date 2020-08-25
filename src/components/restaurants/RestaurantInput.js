import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state);
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Please Enter the Name of the Restaurant: </label>
          <input type="text" name="text" onChange={this.handleChange} value={this.state.text}/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <p>New Restaurant</p>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
            type="text"
          />
          <input type="submit" value="Add Restaurant"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

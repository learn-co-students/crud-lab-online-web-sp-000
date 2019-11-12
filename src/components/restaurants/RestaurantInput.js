import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  };

  onChange = event => {
    this.setState({text: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({text: ""});
  }

  render() {
    return (
      <div>
      <h1> Add a store </h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" value={this.state.text} onChange={event => this.onChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

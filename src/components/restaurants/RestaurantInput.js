import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor() {
    super();
    this.state={
      text: ''
    }
  }

  submitHandler = event => {
    event.preventDefault()
    this.props.addRestaurant(event.target.children[1].value)
  }

  changeHandler = event => {
    this.setState({
        text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Restaurant Name</label>
          <input type="text" value={this.state.text} onChange={event => this.changeHandler(event)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

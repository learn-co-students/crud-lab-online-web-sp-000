import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super()

    this.state={
      text: ''
    }
  }

  changeHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault();

    this.props.addRestaurant(this.state.text)

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" value={this.state.text} onChange={this.changeHandler} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

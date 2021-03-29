import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleOnChange = event =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ""
    })
  }
  render() {
    return (
      <div>
        <form onSubmit = {(event) => this.handleOnSubmit(event)}>
          <input name="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)}></input>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

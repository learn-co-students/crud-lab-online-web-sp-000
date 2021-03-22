import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
  	text: '' // the form field is initially blank, hence the empty string
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({ text: ''}) // clear the form after its submission
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add a Restaurant:</label>
          <input type="text" value={this.state.text} onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
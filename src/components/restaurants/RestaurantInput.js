import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  inputChanged(event) {
    this.setState({
      text: event.target.value
    })
  }

  formSubmitHandler(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.formSubmitHandler(event)}>
          <label>Add a restaurant:</label><br />
          <input type="text" value={this.state.text} onChange={event => this.inputChanged(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    // event.preventDefault();
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit= event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type='text'
            name='name'
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

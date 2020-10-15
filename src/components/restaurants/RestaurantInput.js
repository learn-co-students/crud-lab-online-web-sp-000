import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let restObj = {
      text: this.state.text
    }

    this.props.newRest(restObj);

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant Name:</label>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
            
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

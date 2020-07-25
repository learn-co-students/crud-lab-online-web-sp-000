import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  onTextChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.add(this.state.text)
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Text</label>
          <input onChange={event => this.onTextChange(event) } type="text" value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

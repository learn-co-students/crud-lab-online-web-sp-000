import React, { Component } from 'react'

class RestaurantInput extends Component {
  constructor(){
    super()

    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.dispatch({type: 'ADD_RESTAURANT', text: this.state.text})
    console.log('this.state.text: ', this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>Name:</p>
          <input
            type='text'
            value={this.state.text}
            onChange={(event) => this.handleChange(event)}/><br></br>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

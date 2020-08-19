import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange (event) {
    this.setState({
      text: event.target.value
    });

  }

  handleOnSubmit (event) {
    this.preventDefault();
    this.props.delete(this.state.text)
    this.setState({
      text: ''
    })
  }
  
  render() {
    
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input onChange={(event) => this.handleChange(event)} 
          value={this.state.text}
          type='text' />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

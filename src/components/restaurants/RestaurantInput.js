import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    event.preventDefault
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {

    this.setState({
      text: ''
    })
    
    
  }

  render() {
    return (
      <form onSubmit= {this.handleOnSubmit}>
      <div>
        Restaurant Input<br></br>
        
        <input type='text' name='text' value= {this.state.text} onChange= {this.handleOnChange}/>
        <input type= 'submit'/>
        <button>Submit Form</button>
      </div>
      </form>
    );
  }
};

export default RestaurantInput;

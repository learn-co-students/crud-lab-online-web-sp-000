import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
  
    this.props.addRestaurant(this.state.text)

    this.setState({
      text: ''
    })
    
    
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit= {(event) => this.handleOnSubmit(event)}>
      <div>
        Restaurant Input<br></br>
        
        <input type='text' name='text' value= {this.state.text} onChange= {(event) => this.handleOnChange(event)}/>
        <input type= 'submit'/>
      </div>
      </form>
    );
  }
};

export default RestaurantInput;

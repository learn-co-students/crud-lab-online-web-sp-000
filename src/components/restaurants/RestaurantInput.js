import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })


  }

  handleChange = (e) => {
    this.setState({text: e.target.value})

  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input type = "text" value = {this.state.text} onChange = {this.handleChange}></input>
          <input type="submit" value = "Submit" />
        </form>   
      </div>
    );
  }
};

export default RestaurantInput;

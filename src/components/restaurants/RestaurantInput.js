import React, { Component } from 'react';

class RestaurantInput extends Component {
  state={
    text:''
  }

  handleChange=(e)=>{
    this.setState({
      text:e.target.value
    })
  }
  
  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text:''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder='Restaurant Name' value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

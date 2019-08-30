import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super();
    this.state = {text: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({text: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({text: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleKeyDown(event){
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit = {(event) => this.handleSubmit(event)}>
          <input type="text" onChange = {(event) => this.handleKeyDown(event)} value={this.state.text}/>
          <input type="submit" value="SUBMIT"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

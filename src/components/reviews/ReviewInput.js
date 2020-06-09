import React, { Component } from 'react';


class ReviewInput extends Component {
  
  state = {
    id: this.props.restaurantId,
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type='text' onChange={this.handleOnChange} value={this.state.text} placeholder="Add Comment"/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

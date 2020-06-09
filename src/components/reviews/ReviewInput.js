import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit = event => {
    //event.preventDefault() tells the form to wait on sending the data directly to the server onSubmit, and instead lets us process it here first.
    event.preventDefault()

    //this method needs both the text of the review (content) and the id of the restaurant that the review belongs to.
     this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Review:</label>
          <input
            type='text'
            onChange={(event) => this.handleChange(event)}
            value={this.state.text}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

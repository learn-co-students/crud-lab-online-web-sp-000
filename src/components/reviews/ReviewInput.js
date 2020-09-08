import React, { Component } from 'react';

class ReviewInput extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleSubmit = (e) => {
    const { addReview, restaurantId } = this.props
    e.preventDefault();
    addReview(this.state.text, restaurantId);
    this.setState({
      text: ''
    })
  }

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Review input</label>
          <input name='name' type='text' value={this.state.text} onChange={this.handleInputChange} />
          <br />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

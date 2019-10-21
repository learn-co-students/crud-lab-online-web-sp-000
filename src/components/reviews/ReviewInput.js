import React, { Component } from 'react';
//import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      text: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview(this.props.restaurantId, this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="enter review"
            value={this.state.text}
            onChange={this.handleChange}
            />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

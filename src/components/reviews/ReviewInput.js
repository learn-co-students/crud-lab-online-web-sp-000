import React, { Component } from 'react';
import Reviews from './Reviews';
import {connect} from 'react-redux';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  handleOnSubmit(event) {
      event.preventDefault();
      this.props.addReview(this.state.text, this.props.restaurantId);
      this.setState({
        text: ''
      })
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          value={
            this.state.text
          }
          onChange={
            (event) => this.handleOnChange(event)
          }
        />
        <input type="submit" />
      </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addReview: (name, restaurantId) => dispatch({type: "ADD_REVIEW", review: {text: name, restaurantId: restaurantId}})
})

export default connect(null, mapDispatchToProps)(ReviewInput);

import React, { Component } from 'react';

class ReviewInput extends Component {

  state ={
    text:''
  }


  handleOnChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview({  // dispatches action to reducer
      text: this.state.text,
      restaurantId: this.props.restaurantId  // ovo ide iz reducera
      // ne salje mi ovdje ID - undefined!!!!!!!!!!!!! promjenio u PROPS
    });
    this.setState({
      text:''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input
            type='text'
            value={this.state.text}
            onChange={event => this.handleOnChange(event)} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

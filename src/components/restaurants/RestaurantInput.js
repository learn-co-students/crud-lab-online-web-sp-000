import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRestaurant } from "../../actions/restaurants";

class RestaurantInput extends Component {

  state = {
    text: '',
  }

  changeHandler = event => {
    this.setState({
      text: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();
    // this.props.dispatch(addRestaurant)
    console.log(this.props, this.state)
    this.setState({name: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" onChange={this.changeHandler} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default connect(null, { addRestaurant })(RestaurantInput);

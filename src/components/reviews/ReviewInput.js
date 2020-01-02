import React, { Component } from 'react';


class ReviewInput extends Component {

  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  changeHandler = event => {
    this.setState({
      text: event.target.value
    })
  }

  submitHandler = event => {
    debugger
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
  }


  render() {
    return (
      <div>
       <form  onSubmit={event => this.submitHandler(event)}>
         <input type="text" onChange={event => this.changeHandler(event)} value={this.state.text}/>
         <input type="submit" />
       </form>
      </div>
    );
  }
};

export default ReviewInput;

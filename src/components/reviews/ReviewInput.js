import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props){
    super(props);
    //console.log("initialprops: ", props.restaurant.id)
    this.state = {
      text: ''
    }
  } 

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    console.log("props: ", this.props.restaurant.id)
    event.preventDefault();
    //this.props.addReview(...review, this.props.restaurant.id)
    this.props.addReview( 
      {text: this.state.text, restaurantId: this.props.restaurantId} 
    )
  }

  render() {
    //id=id
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
            <input type="text" value={this.state.text} onChange={this.handleOnChange} />
            <input type="submit" value="Submit"  />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

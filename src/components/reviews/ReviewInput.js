import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
state = {
  text:''
}

handleOnChange = (event) => {
  this.setState({
  [event.target.name]:event.target.value
  })
}

handleSubmit = (event) => {
event.preventDefault()
// debugger
this.props.addReview({text:this.state.text, restaurantId:this.props.restaurantId})
 
this.setState({
 text:''

 })

}

handleDelete = (event) => {
event.preventDefault()
this.props.delete(this.props.review.id)

}


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
      <label> New Review</label>
      <input type="text" name="text" value={this.state.text} onChange={this.handleOnChange}/>
      <input type="submit"/>





        </form>
      </div>
    );
  }
};

export default ReviewInput;

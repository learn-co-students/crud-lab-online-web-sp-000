import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
  }

  handleChange = (e)=>{
    this.setState({
      text: e.target.value
    },()=>console.log(this.state))
  }



  handleSubmit = (e) =>{
    e.preventDefault()
    const {addReview, restaurantId} = this.props
    addReview(this.state.text, restaurantId)
    this.setState({
      text: ""
    }

    )

  }

  render() {
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
        <input type = "text" value = {this.state.text} onChange = {this.handleChange} />
        <input type = "submit"  value = "submit" />
      </form>
      
      </div>
    );
  }
};

export default ReviewInput;

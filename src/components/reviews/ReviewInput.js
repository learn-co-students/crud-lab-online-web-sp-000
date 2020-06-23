import React, { Component } from 'react';
import cuid from 'cuid'

class ReviewInput extends Component {
  
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value 
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview({
      id: cuid(),
      restaurantId: event.target.className,
      ...this.state
    })
    this.setState({
      text: ''
    })
  }
  
  
  render() {
    
    const {restaurant} = this.props

    return (
      <div>
      <h3>Add a New Review for This Restaurant:</h3>
        {/* Using h3 tag to title--might throw off tests */}
        <form onSubmit={this.handleOnSubmit} className={restaurant.id}> 
          <input type='text' onChange={this.handleOnChange} 
          value={this.state.text} />
          <button type="submit" >Add</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }
 onChangeHandle = (e)=>{
   this.setState({
     text: e.target.value
   })
 }
 //send restaurant id to add review
 onSubmitHandle = (e) =>{
   e.preventDefault()
   const review = {...this.state,restaurantId: this.props.restaurantId  };
   this.props.addReview(review);
  
   this.setState({
     text: '',
   });
 }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandle }>
          <input onChange={this.onChangeHandle} type="text" value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

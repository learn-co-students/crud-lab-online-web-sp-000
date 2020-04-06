import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    console.log("delete: ", this.props.deleteReview)
    console.log("id: ", this.props.id)
    this.props.deleteReview(this.props.id)
  }

  render() {
    const { review } = this.props
    //console.log("review props text: ", this.props.text)
    return (
      <div>
        <li>
          {this.props.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;

import React, { Component } from 'react';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      text: props.review.text
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  toggleEdit = () => {
    this.setState({
      isEditing: true
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editReview({
      id: this.props.review.id,
      text: this.state.text
    });
    this.setState({
      isEditing: false
    });
  };

  render() {
    const { review, deleteReview } = this.props;
    return (
      <div>
        {this.state.isEditing ? (
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              value={this.state.text}
              onChange={this.handleChange}
            />
            <input type='submit' />
          </form>
        ) : (
          <li>
            {review.text}
            <button onClick={this.toggleEdit}>Edit Review</button>
            <button onClick={() => deleteReview(review.id)}> X </button>
          </li>
        )}
      </div>
    );
  }
}

export default Review;

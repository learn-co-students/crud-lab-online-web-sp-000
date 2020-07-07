import React, { Component } from 'react';
import {connect} from 'react-redux'

class Review extends Component {
  
  handleDelete = event => {
    event.preventDefault()
    this.props.dispatch({type: 'DELETE_REVIEW', id: this.props.review.id})
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleDelete}> X </button>
      </div>
    );
  }

};

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Review);
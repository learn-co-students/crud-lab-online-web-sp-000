import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import { connect } from 'react-redux'

class Restaurant extends Component {

  handleDelete = event => {
    event.preventDefault()
    this.props.dispatch({type: 'DELETE_RESTAURANT', id: this.props.restaurant.id})
  }

  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleDelete}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Restaurant);

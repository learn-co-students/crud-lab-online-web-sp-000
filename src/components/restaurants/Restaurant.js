import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import {connect} from 'react-redux'
class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    console.log('this singular restaurant', restaurant)

    
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};


const mapStateToProps = state => {
  return({
    restaurants: state.restaurants
  })
}

const mapDispatchToProps = dispatch => {
  return({
    deleteRestaurant: (id) => dispatch({type:'DELETE_RESTAURANT', id})
})
}



export default connect (mapStateToProps, mapDispatchToProps)(Restaurant)

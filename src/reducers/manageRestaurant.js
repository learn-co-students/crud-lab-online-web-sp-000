import cuid from 'cuid';


import { combineReducers } from 'redux';

const manageRestaurant = combineReducers({
  restaurants: manageTheRestaurants,
  reviews: manageTheReviews
})

export default manageRestaurant;



function manageTheReviews(state = [], action) {
  switch (action.type) {

    case 'ADD_REVIEW':
      const newReview = { ...action.review, id: cuid() };
      console.log(state.concat(newReview))
      return state.concat(newReview);

    case 'DELETE_REVIEW':
      console.log('delete review reached')
      const newArray = state.filter( review => review.id !== action.reviewId)
      console.log(newArray)
      return newArray
    default:
      return state

  }

}



function manageTheRestaurants(state =  [] , action) {
console.log('reached reducer')

  switch (action.type) {

    case 'ADD_RESTAURANT':
      const newRestaurant = { ...action.restaurant, id: cuid() };
      console.log(state.concat(newRestaurant))
      return state.concat(newRestaurant);

    case 'DELETE_RESTAURANT':
      console.log('delete restuarnat reached in reducer')
      const newArray = state.filter( (rest) => { return rest.id !== action.id });
      console.log(newArray);
      return newArray



    default:
      return state

  }
}

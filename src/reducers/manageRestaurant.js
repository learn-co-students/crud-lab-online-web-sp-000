import cuid from 'cuid';
import {combineReducers} from 'redux'
import manageReviews from './manageReviews';

function manageRestaurants(state=[], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return [...state, {text: action.text, id: cuid()}]
    case 'DELETE_RESTAURANT':
      return state.filter(rest=> rest.id !== action.id)

  default:
      return state;
  }

}
export default combineReducers({restaurants: manageRestaurants, reviews: manageReviews})

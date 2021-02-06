import { combineReducers } from 'redux';
import restaurants from './manageRestaurant';
import reviews from './manageReview';

export default combineReducers({
    restaurants,
    reviews
});
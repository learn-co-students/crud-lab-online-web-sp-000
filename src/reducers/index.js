import { combineReducers } from 'redux';
import manageRestaurants from './manageRestaurant';

const rootReducer = combineReducers({
 manageRestaurants,
});

export default rootReducer;

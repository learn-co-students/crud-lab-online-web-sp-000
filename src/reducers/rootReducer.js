import { combineReducers } from "redux";
import manageRestaurants from "./manageRestaurant";

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  review: []
});

export default rootReducer;
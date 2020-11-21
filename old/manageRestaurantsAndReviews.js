import { combineReducers } from "redux";
import cuid from "cuid";
 
const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  reviews: reviewReducer
});

function restaurantReducer(state = [], action) {
    let idx;
    switch (action.type) {
      case "ADD_RESTAURANT":
        return [...state, { text: action.text, id: cuid() }];
      case "DELETE_RESTAURANT":
        idx = state.findIndex(restaurant => restaurant.id  === action.id)
        return [...state.slice(0, idx), ...state.slice(idx + 1)];               
      default:
        return state;
    }
  }

  function reviewReducer(state = [], action) {
    switch (action.type) {
      case "ADD_BOOK":
        return [...state, action.book];

      default:
        return state;
    }
  }

export default rootReducer;
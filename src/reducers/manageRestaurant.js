import cuid from 'cuid';
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    restaurants: manageRestaurant,
    reviews: manageReview
  });
 export default rootReducer;

function manageRestaurant(state = [], action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            const newRestaurant = {id: cuid(), text: action.text}   
            return [...state, newRestaurant]

        case "REMOVE_RESTAURANT":
            return state.filter(r => (r.id !== action.id))
        default:
            return state
}
}


function manageReview(state = [], action) {

    switch(action.type){
        case "ADD_REVIEW":
            const newReview = {id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId}

            return [...state, newReview]

        case "REMOVE_REVIEW":
            console.log(state.reviews, action)
            return state.filter(r => (r.id !== action.id))
        default:
            return state
}
}

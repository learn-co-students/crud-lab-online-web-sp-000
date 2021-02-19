import { combineReducers } from "redux"
import cuid from 'cuid'

const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
    reviews: reviewsReducer
})

export default rootReducer;

function restaurantsReducer(state = [], action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            return [...state, {id: cuid(), text: action.text}]
            
        case "DELETE_RESTAURANT":
            return state.filter( r => r.id !== action.id )
            
        default:
            return state;
    }
}

function reviewsReducer(state = [], action) {
    switch (action.type) {
        case "ADD_REVIEW":
            const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() };
            return [...state, review]
            // return [...state, {id: cuid(), text: action.text, restaurantId: action.restaurantId}]

        case "DELETE_REVIEW":
            return state.filter(r => r.id !== action.id)

        default:
            return state
    }
}
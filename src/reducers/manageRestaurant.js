import { combineReducers } from 'redux';
import cuid from 'cuid';
export const cuidFn = cuid;

export function manageRestaurants(state = [], action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            return [...state, {text: action.text, id: cuid() }]

        case "DELETE_RESTAURANT":
            return state.filter(res => res.id !== action.payload)

        default:
            return state
    }
}

export function manageReviews(state = [], action) {
    switch(action.type){
        case "ADD_REVIEW":
            return [...state, {...action.review, id: cuid() }]
            
        case "DELETE_REVIEW":
            return state.filter(rev => rev.id !== action.payload)
       
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})

export default rootReducer


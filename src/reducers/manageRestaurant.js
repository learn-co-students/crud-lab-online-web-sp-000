import { combineReducers } from 'redux';
import cuid from 'cuid';
export const cuidFn = cuid;

export function manageRestaurants(state = {
    restaurants: []
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':

            return {...state, restaurants: [...state.restaurants, {
                id: cuid(),
                text: action.text
            }]}

        case 'DELETE_RESTAURANT':

            return {...state, restaurants: [...state.restaurants.filter(r => r.id !== action.id)]}

        default:
            return state
    }

}

export function manageReviews(state = {
    reviews: []
}, action) {
    
    switch(action.type){

        case "ADD_REVIEW":
            return [...state, {...action.payload, id: cuid() }]
        case "DELETE_REVIEW":
            return state.filter(rev => rev.id !== action.payload)
        case "DELETE_RESTAURANT":
            return state.filter(rev => rev.restaurantId !== action.payload)

        default: 
            return state
    }
}

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})

export default rootReducer


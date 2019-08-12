
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.payload.text,
                review: []
            }
    
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case 'DELETE_RESTAURANT':
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload)}
        case 'ADD_REVIEW':
            const reviewIndex = state.restaurants.findIndex( restaurant => restaurant.id === action.payload.id)
      
            return {restaurants: [...state.restaurants.slice(0,reviewIndex), Object.assign({}, state.restaurants[reviewIndex], {review: [...state.restaurants[reviewIndex].review, {text: action.payload.text}]})]}
        default:
            return state;
    }
}

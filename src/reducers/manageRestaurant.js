
import cuid from 'cuid';
export const cuidFn = cuid;
// {type: 'ADD_RESTAURANT', text: "Muzarella"}
export default function manageRestaurants(state={restaurants: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            console.log("myData type in reducer", state)
            const restaurant = {
                id: cuid(),
                text: action.text,
                review: []
            }
    
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case 'DELETE_RESTAURANT':
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload)}
        case 'ADD_REVIEW':
            const addReviewIndex = state.restaurants.findIndex( restaurant => restaurant.id === action.payload.id)
            
            return {restaurants: [...state.restaurants.slice(0,addReviewIndex), Object.assign({}, state.restaurants[addReviewIndex], {review: [...state.restaurants[addReviewIndex].review, {id: cuid(), text: action.payload.text, restaurantID: action.payload.id}]})]}
        case 'DELETE_REVIEW':
            const restaurantIndex = state.restaurants.findIndex( restaurant => restaurant.id === action.payload.restaurantID)

            return {restaurants: [...state.restaurants.slice(0,restaurantIndex), Object.assign({}, state.restaurants[restaurantIndex], {review: state.restaurants[restaurantIndex].review.filter(review => review.id !== action.payload.id)
            })]}
        default:
            return state;
    }
}

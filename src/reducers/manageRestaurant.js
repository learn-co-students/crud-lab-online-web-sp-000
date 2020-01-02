
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: [],}, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            
            const restaurant = {
                id: cuidFn(),
                text: action.text
            }
            
            return { ...state, restaurants: [...state.restaurants, restaurant]}
        
        case 'DELETE_RESTAURANT':
            return { restaurants: state.restaurants.filter(rest => rest.id !== action.id)}

        case 'ADD_REVIEW':
            
            const review = {
                id: cuidFn(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            
            // return {reviews: state.reviews.concat(review)}
            return { ...state,
                reviews: [...state.reviews, review]
              }

        case 'DELETE_REVIEW':
            debugger
            const reviews = state.reviews.filter(review => review.id !== action.id)
            debugger
            return {...state, reviews}
        
        default:
            return state
    }
}

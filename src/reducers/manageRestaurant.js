
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            return {
                ...state,
                reviews: [...state.reviews],
                restaurants: [...state.restaurants, restaurant]
            }

        case 'DELETE_RESTAURANT':
            console.log('DELETE', action)
            return {
                ...state,
                reviews: [...state.reviews],
                restaurants: [...state.restaurants.filter(restaurant => restaurant.id !== action.payload)]
            }

        case 'ADD_REVIEW':
            const review = {
                ...action.review,
                id: cuid()
            }
            return {
                ...state,
                reviews: [...state.reviews, review],
                restaurants: [...state.restaurants]
            }
        
        case 'DELETE_REVIEW':
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.payload),
                restaurants: [...state.restaurants]
            }

        default:
            return state
    }
}

/* 
    return {
        ...state,
        reviews: [...state.reviews],
        restaurants: [...state.restaurants, restaurant]
    } 
*/

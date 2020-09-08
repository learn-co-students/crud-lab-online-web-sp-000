
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            return {
                reviews: [...state.reviews],
                restaurants: [...state.restaurants, restaurant]
            }; 
        case 'DELETE_RESTAURANT':
            return {
                reviews: state.reviews.filter(review => review.restaurantId !== action.id),
                restaurants: state.restaurants.filter(rest => rest.id !== action.id)
            }
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return {
                restaurants: [...state.restaurants],
                reviews: [...state.reviews, review]
            }  
        case 'DELETE_REVIEW':
            return {
                restaurants: [...state.restaurants],
                reviews: state.reviews.filter(review => review.id !== action.id) 
            }
            
        default:
            return state;
    }
}

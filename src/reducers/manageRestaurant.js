
import cuid from 'cuid';
import { restore } from 'sinon';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            const newRestaurant = {
                text: action.text,
                id: cuidFn()
            };
            return {
                ...state,
                restaurants: [...state.restaurants, newRestaurant]
            };
        case 'DELETE_RESTAURANT':
            return {
                ...state,
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
            }
        
        case 'ADD_REVIEW':
            const newReview = {
                text: action.review.text,
                restaurantId: action.review.restaurantId,
                id: cuidFn()
            }
            return {
                ...state,
                reviews: [...state.reviews, newReview]
            }
        case 'DELETE_REVIEW':
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.id)
            }

        default:
            return state;
    }
}

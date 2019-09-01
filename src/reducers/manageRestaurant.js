
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state= {
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT': 
        return { ...state, restaurants: [...state.restaurants, { text: action.text, id: cuid() }]}

        case 'DELETE_RESTAURANT':
        return { ...state, restaurants: state.restaurants.filter(r => r.id !== action.id)}

        case 'ADD_REVIEW': 
        return { ...state, reviews: [...state.reviews, { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() }]}

        case 'DELETE_REVIEW':
        return { ...state, reviews: state.reviews.filter(r=> r.id !== action.id)}

    default: 
        return state;
    }
}

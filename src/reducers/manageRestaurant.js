
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {

    switch (action.type) {
        case "ADD_RESTAURANT":

            const rest = {
                id: cuid(),
                text: action.text
            }
            return {
                ...state,
                restaurants: state.restaurants.concat(rest)
            }
        
        case "DELETE_RESTAURANT":
            return {
                ...state,
                restaurants: state.restaurants.filter(res => res.id !== action.id)
            }

        case 'ADD_REVIEW':

            const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
            return { ...state,
                reviews: [...state.reviews, review]
            }
          
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {...state, reviews }

        default:
            return state
    }
}

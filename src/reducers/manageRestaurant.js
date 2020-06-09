
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}

        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(rest => rest.id !==action.id);
            return { ...state, restaurants }; // rijesilo filter error

        case 'ADD_REVIEW':
            const review = {
                text: action.review.text, // action.text promjenjen u action.review.text
                // sad je OK
                restaurantId: action.review.restaurantId,
                id: cuid()
                ///////////////////////// belongs_to
            }
            return {...state, reviews: [...state.reviews, review]}

        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(rev => rev.id !==action.id);
            return {
               ...state, ////////
                reviews
            };

        default:
            return state;

    }
}

import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [], reviews: [] }, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            const rest = { id: cuid(), text: action.text, }
            return { ...state, restaurants: [...state.restaurants, rest]}
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(r => r.id !== action.id)
            return { ...state, restaurants: restaurants}
        case 'ADD_REVIEW':
            const rev = { id: cuid(), restaurantId: action.review.restaurantId,text: action.review.text}
            return { ...state, reviews: [...state.reviews, rev]}
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(r => r.id !== action.id);
            return { ...state, reviews: reviews}
        default: return state
    }
}

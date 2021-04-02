import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {

    switch (action.type) {
        case 'ADD_RESTAURANT':
            return {
                restaurants: [...state.restaurants, { id: cuid(), text: action.text }],
                reviews: [...state.reviews]
            };

        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(r => r.id !== action.id);
            const revs = state.reviews.filter(r => r.restaurantId !== action.id);
            return {
                restaurants: restaurants,
                reviews: revs
            }

        case 'ADD_REVIEW':
            return {
                restaurants: [...state.restaurants],
                reviews: [...state.reviews, { id: cuid(), text: action.text, restaurantId: action.restaurantId }]
            }

        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(r => r.id !== action.id);
            return {
                restaurants: [...state.restaurants],
                reviews: reviews
            }
        
        default:
            return state;
    }

}

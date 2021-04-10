import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type) {
        case "ADD_RESTAURANT":
            const restaurant = {text: action.text, id: cuid()}
            return {
                restaurants: [...state.restaurants, restaurant],
                reviews: [...state.reviews]
            }
        case "DELETE_RESTAURANT":
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            const rev = state.reviews.filter(review => review.restaurantId !== action.id);
            return {
                restaurants: restaurants,
                reviews: rev 
            }

        case 'ADD_REVIEW':
            const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid()};
            return { ...state,
                reviews: [...state.reviews, review]
            }
            case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {...state, reviews }
        
            default:
            return state;
            }
};

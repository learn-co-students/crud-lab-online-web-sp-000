import cuid from 'cuid';

export default function manageRestaurants(state = { 
    restaurants: [], 
    reviews: []
}, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            let newRestaurant = {
                id: cuid(),
                text: action.name
            }
            return {...state, restaurants: [...state.restaurants, newRestaurant]}
        
        case 'DELETE_RESTAURANT':
            let restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)

            return {...state, restaurants}
        
        case 'ADD_REVIEW':
            let newReview = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }

            return {
                ...state, reviews: [...state.reviews, newReview]
            }

        case 'DELETE_REVIEW':
            let reviews = state.reviews.filter(review => review.id !== action.id)
            return {...state, reviews}



        default:
            return state;
    }
}

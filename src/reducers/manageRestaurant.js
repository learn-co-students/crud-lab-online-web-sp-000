import cuid from 'cuid';

export default function manageRestaurants(state = {reviews: [], restaurants: []}, action) {
    switch(action.type) {

        case 'ADD_RESTAURANT':

            const restaurant = {
                id: cuid(),
                text: action.text
            }

            return {
                ...state.reviews,
                restaurants: [...state.restaurants, restaurant]
            }
        
        case 'DELETE_RESTAURANT':
            const restaurantsFiltered = state.restaurants.filter(function (restaurant) {
                return restaurant.id !== action.id
            })
            return {
                ...state.reviews,
                restaurants: restaurantsFiltered
            }
        
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                text: action.text
            }
            return {
                ...state.restaurants,
                reviews: [...state.reviews, review]
            }

        default: 
            return state
    }
}

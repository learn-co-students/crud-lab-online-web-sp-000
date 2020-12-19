import cuid from 'cuid';

export default function manageRestaurants(state = {reviews: [], restaurants: []}, action) {
    switch(action.type) {

        case 'ADD_RESTAURANT':

            const restaurant = {
                id: cuid(),
                text: action.text
            }
            if (state.reviews === undefined) {
                return {
                    reviews: [],
                    restaurants: [...state.restaurants, restaurant]
                }
            } else {
                return {
                    reviews: [...state.reviews],
                    restaurants: [...state.restaurants, restaurant]
                }
            }
            
        
        case 'DELETE_RESTAURANT':
            const restaurantsFiltered = state.restaurants.filter(function (restaurant) {
                return restaurant.id !== action.id
            })
            return {
                reviews: [...state.reviews],
                restaurants: restaurantsFiltered
            }
        
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                restaurantId: action.review.restaurantId,
                text: action.review.text
            }
            if (state.reviews === undefined) {
                return {
                    restaurants: [...state.restaurants],
                    reviews: [review]
                }
            } else {
                return {
                
                    restaurants: [...state.restaurants],
                    reviews: [...state.reviews, review]
                }
            }
            

        case 'DELETE_REVIEW':
            const reviewsFiltered = state.reviews.filter(function (review) {
                return review.id !== action.id
            })
            return {
                restaurants: [...state.restaurants],
                reviews: reviewsFiltered
            }

        default: 
            return state
    }
}
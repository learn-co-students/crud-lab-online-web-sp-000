
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {

    switch (action.type) {
        case 'ADD_RESTAURANT':
            return {
                restaurants: [ ...state.restaurants, { text: action.payload, id: cuidFn() } ],
                reviews: [ ...state.reviews ]
            }
        case 'DELETE_RESTAURANT':
            return {
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload),
                reviews: [ ...state.reviews ]
            }
        case 'ADD_REVIEW':
            return {
                restaurants: [ ...state.restaurants ],
                reviews: [ ...state.reviews, { 
                    text: action.review.text, 
                    restaurantId: action.review.restaurantId, 
                    id: cuidFn() 
                    }
                ]
            }
        case 'DELETE_REVIEW':
            return {
                restaurants: [ ...state.restaurants ],
                reviews: state.reviews.filter(review => review.id !== action.payload)
            }
        default:
            return state;
    }
}	


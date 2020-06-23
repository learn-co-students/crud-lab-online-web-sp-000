
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    console.log(state)
    switch(action.type) {
      
        case 'ADD_RESTAURANT':
            return Object.assign({}, state, {restaurants: state.restaurants.concat(action.text)})

        case 'DELETE_RESTAURANT':
            return Object.assign({}, state, {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload),
                reviews: state.reviews.filter(review => review.id !== action.payload)})

        case 'ADD_REVIEW':
            return Object.assign({}, state, {reviews: state.reviews.concat(action.text)})

        case 'DELETE_REVIEW':
            return Object.assign({}, state, {reviews: state.reviews.filter(review => review.id !== action.payload)})

        default:
            return state;  
    }
}


// For deleting restaurants--two pieces needed--
// filter out reviews with the appropriate restaurantId then
// fileter out restaurants with the appropriate id 
import uuid from 'uuid';
import cuid from 'cuid';
export const cuidFn = cuid;


export default function manageRestaurants(state={
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type){
        case('ADD_RESTAURANT'):
            let newRestaurantsList = state.restaurants.slice()
            let newRestaurant = {text: action.text}
            newRestaurant.id = uuid()
            newRestaurantsList.push(newRestaurant)
            return {restaurants: newRestaurantsList, reviews: state.reviews}

        case('DELETE_RESTAURANT'):
            return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id), reviews: state.reviews}

        case('ADD_REVIEW'):
            let newReview = {...action.review}
            newReview.id = uuid()
            let newReviewsList = state.reviews.slice()
            newReviewsList.push(newReview)
            return {restaurants: state.restaurants, reviews: newReviewsList}

        case('DELETE_REVIEW'):
            return {restaurants: state.restaurants, reviews: state.reviews.filter(review => review.id !== action.id)}

        default:
            return state
    }
}

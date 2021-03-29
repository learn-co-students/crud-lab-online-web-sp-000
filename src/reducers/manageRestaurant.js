import cuid from 'cuid';
import{ combineReducers } from "redux"; 

const manageRestaurant = combineReducers({
    restaurants: restaurantsReducer,
    reviews: reviewsReducer
});

export default manageRestaurant;

function restaurantsReducer (state = []
, action ) {
    switch(action.type){
        case "ADD_RESTAURANT":
            const restaurant = {
                id: cuid(),
                name: action.name
            }
            console.log(state)
            return {...state, restaurant }
            // return {...state, restaurants: [...state.restaurants, restaurant]};

        case "DELETE_RESTAURANT":
            return {...state, restaurants: state.restaurants.filter(resturant => restaurant.id !== action.id) };
        default:
            return state;
    }
}

function reviewsReducer(state = [], action ){
    switch(action.type) {
        case "ADD_REVIEW":
            const review = {
                id: cuid(),
                text: action.review.text,
                resturant_id: action.review.restaurant_id
            }
            return {...state, reviews: [...state.reviews, review ]};
        case "DELETE_REVIEW":
            return {...state, reviews: state.reviews.filter(review => review.id !== action.id)};
        case "DELETE_RESTAURANT":
            return {...state, reviews: state.reviews.filter(review => review.restaurant_id !== action.id)}
        default:
            return state
    }
}

// export default function manageRestaurants(state, action) {

// }

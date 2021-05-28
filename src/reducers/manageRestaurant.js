import cuid from 'cuid';
//import { combineReducers } from 'redux';

/*
const manageRestaurants = combineReducers({
   restaurants,
})
export default manageRestaurants;
*/

//export default function manageRestaurants(state = [], action) {
   //*********** */ export default function manageRestaurants(state = [], action) {
   export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
 //function restaurants(state = [], action) {
    let idx;
    switch(action.type){
        case "ADD_RESTAURANT":
            
            const rest = {
                text: action.text,
                id: cuid()
            }

            return{restaurants: [...state.restaurants.concat(rest)], reviews: [...state.reviews]};
           // return{restaurants: [...state.concat(rest)]};

        case "DELETE_RESTAURANT":
            idx = state.restaurants.findIndex(rest => rest.id === action.restaurantId)
           // idx = state.findIndex(rest => rest.id === action.restaurantId)
            return {restaurants: [ ...state.restaurants.slice(0, idx), ...state.restaurants.slice(idx + 1)], reviews: [...state.reviews]};
           // return [ ...state.restaurants.slice(0, idx), ...state.restaurants.slice(idx + 1)];

        case "ADD_REVIEW":
            console.log(action, state)
            let review = {
                text: action.text,
                restaurantId: action.restaurantId,
                id: cuid(),
            }

            console.log({restaurants: [...state.restaurants], reviews: [...state.reviews, review]})
            return {restaurants: [...state.restaurants], reviews: [...state.reviews, review]};

        case "REMOVE_REVIEW":
            
            idx = state.reviews.findIndex(rev => rev.id === action.reviewId)
            return  {restaurants: [...state.restaurants], reviews: [...state.reviews.slice(0, idx), ...state.reviews.slice(idx + 1)]};
        
        default:
            return state;
    }
 

}


import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [], reviews: [] }, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            //console.log("state: ", state)
            let r = {text: action.text, id: cuid()}
            return { restaurants: state.restaurants.concat(r), reviews: state.reviews}
        case 'DELETE_RESTAURANT':
            return { 
                restaurants:
                    state.restaurants.filter((restaurant) => restaurant.id !== action.id),
                reviews: state.reviews
            }
        case 'ADD_REVIEW':
            //action.review = {text: text, restaurantId: restaurantId}
            //let rest = state.restaurants.filter( restaurant => restaurant.id === action.review.restaurantId);

            //let rs = rest.reviews.concat({id: cuid(), restaurntId: action.review.restaurantId, text: action.review.text})
            //rest.reviews = rs;
            //return {
              //  restaurants: state.restaurants.concat(rest)
            //}
           // console.log("newObject ", {restaurants: state.restaurants,
            //reviews: state.reviews.concat({id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId})})
            //console.log("action.review: ", action.review)

            return({
                restaurants: state.restaurants,
                reviews: state.reviews.concat({id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId})
            })
        case 'DELETE_REVIEW':
            console.log("state reviews: ", state.reviews)
            let filteredReviews = state.reviews.filter( r => r.id !== action.id)
            console.log("fR: ", filteredReviews)
            return ({
                restaurants: state.restaurants, reviews: filteredReviews
            })    

        default:
            return state
    }

}

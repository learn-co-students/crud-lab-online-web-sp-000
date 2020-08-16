
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            const rest = {
                id: cuid(),
                text: action.text
            }
            return Object.assign({}, state, {restaurants: [ ...state.restaurants, rest]})
        case "DELETE_RESTAURANT":
            let restaurants = state.restaurants.filter(rest => rest.id !== action.id)
            return {...state, restaurants }
        case "ADD_REVIEW":
            const review = {
                id: cuidFn(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return Object.assign({}, state, { reviews: [...state.reviews, review] })
        case "DELETE_REVIEW":
            let reviews = state.reviews.filter(rev => rev.id !== action.id)
            return {...state, reviews }
        default:
            return state;
    }
}

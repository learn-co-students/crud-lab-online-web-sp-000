
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            const rest = {
                id: cuid(),
                text: action.text
            }
            return { restaurants: state.restaurants.concat(rest) }
        case "DELETE_RESTAURANT":
            let restaurants = state.restaurants.filter(rest => rest.id !== action.id)
            return { restaurants }
        case "ADD_REVIEW":
            const review = {
                id: cuid(),
                text: action.text,
                restaurantId: ''
            }
            return { reviews: state.reviews.concat(review) }
        case "DELETE_REVIEW":
            let reviews = state.reviews.filter(rev => rev.id !== action.id)
            return { reviews }
        default:
            return state;
    }
}

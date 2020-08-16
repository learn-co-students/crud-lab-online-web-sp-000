
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            const rest = {
                id: cuid(),
                name: action.name
            }
            return { restaurants: state.restaurants.concat(rest)}
        case "DELETE_RESTAURANT":
            let restaurants = state.restaurants.filter(rest => rest.id !== action.id)
            return { restaurants }
        default:
            return state;
    }
}

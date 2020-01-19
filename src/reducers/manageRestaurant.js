import uuid from 'uuid'
import cuid from 'cuid';
export const cuidFn = cuid;

// export default function manageRestaurants(state, action) {

// }

export default function manageRestaurants(state = {
    restaurants: [], reviews: []
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: uuid(),
                text: action.text
            }
            return{...state, restaurants: [...state.restaurants, restaurant]}
        default:
            return state
    }
}
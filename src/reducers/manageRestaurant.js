import cuid from 'cuid';
import Restaurant from '../components/restaurants/Restaurant';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: []
}, action) {
    switch (action.type) {

        case 'DELETE_RESTAURANT':
            return 

        case 'ADD_RESTAURANT':
            const restaurant = {id: cuidFn(), text: action.payload}
            return { ...state, restaurants: [...state.restaurants, restaurant] }

        default:
            return state;
    }
}

// export default function manageBand(state = {
//     bands: []
//   }, action) {
//     switch (action.type) {
//       case 'ADD_BAND':
//         const band = { id: Math.random(), name: action.name }
//         return { ...state, bands: [...state.bands, band] }
//       case 'DELETE_BAND':
//         const bands = state.bands.filter(band => band.id !== action.id);
//         return { bands };
//       default:
//         return state;
//     }
//   };
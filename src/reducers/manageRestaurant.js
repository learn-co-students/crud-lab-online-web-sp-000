import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = [], action) {
  switch (action.type) {
      case 'ADD_RESTAURANT':
        let newRestaurant = {
          id: cuid(),
          name: action.name
        }
        return [...state, newRestaurant]
      default:
        return state;
  }
}

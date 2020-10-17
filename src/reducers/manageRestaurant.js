

export default function manageRestaurants(state =     {
    restaurants: [],
    reviews: []
  }, action) {
    switch(action.type) {
        case "ADD_RESTAURANT":
            return {...state, restaurants: [...state.restaurants, action.restaurant]}
        case "DELETE_RESTAURANT":
            return {...state, restaurants: [state.restaurants.filter( restaurant => (restaurant.id !== action.id ))]}
        default:
            return state;
    }

}

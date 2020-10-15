import cuid from 'cuid';

const initialState = ({
  restaurants: [],
  reviews: []
})

export default function manageRestaurants(state = initialState, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":

      let restObj = {
        id: cuid(),
        text: action.text
      }

      return {restaurants: state.restaurants.concat(restObj)}
      
    case "DELETE_RESTAURANT":
      let filtered = state.restaurants.filter(rest => rest.id !== action.payload)
      return { restaurants: filtered }
    default: 
      return state
  }
}

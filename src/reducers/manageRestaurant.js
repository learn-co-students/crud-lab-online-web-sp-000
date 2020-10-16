import cuid from 'cuid';
import cloneDeep from 'lodash/cloneDeep';

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":

    let restObj = {
      id: cuid(),
      text: action.text
    }

    // deep cloning state
    let addRestaurantStateClone = cloneDeep(state);

    // changing state
    addRestaurantStateClone.restaurants = [...addRestaurantStateClone.restaurants, restObj]

    // returning new state
    return {...addRestaurantStateClone}
      
    case "DELETE_RESTAURANT":
      let deleteRestaurantStateClone = cloneDeep(state);

      let filtered = deleteRestaurantStateClone.restaurants.filter(rest => rest.id !== action.payload)

      // filtered is an array of filtered rests

      deleteRestaurantStateClone.restaurants = [...filtered]

      return {...deleteRestaurantStateClone}

    case "ADD_REVIEW":
      let reviewObject = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }

      let addReviewStateClone = cloneDeep(state);

      addReviewStateClone.reviews = [...addReviewStateClone.reviews, reviewObject]

      return { ...addReviewStateClone }

    case "DELETE_REVIEW":

      let deleteReviewStateClone = cloneDeep(state);

      // filter is non-destructive (returns new array)
      let filteredRevs = deleteReviewStateClone.reviews.filter(rev => rev.id !== action.id)

      deleteReviewStateClone.reviews = [...filteredRevs]

      return { ...deleteReviewStateClone }

    default: 
      return state
  }
}

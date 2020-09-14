
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
  }, action) {
    switch (action.type) {
      case 'ADD_RESTAURANT':
        console.log('added restaurants')
      const restaurant = {
        id: cuid(),
        text: action.text
        //reviews: []
      }
      return { ...state, restaurants: state.restaurants.concat(restaurant) };
  
      case 'DELETE_RESTAURANT':
        console.log('delete restaurant', 'state', state, 'action', action)
      return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
  
      case 'ADD_REVIEW':
        console.log('Steps on added review:')
    //  let reviewedRestaurant = Object.assign({}, state.restaurants.find(restaurant => restaurant.id === action.restaurantId) ) 
    //    console.log('1- reviewed restaurant', reviewedRestaurant)
    //  let idx = state.restaurants.findIndex(restaurant => restaurant.id  === action.restaurantId)
    //    console.log('2- index of reviewed restaurant', idx)
      const review = {
          id: cuid(),
          text: action.review.text,
          restaurantId: action.review.restaurantId
      }
        console.log('3- new review object', review)
    //  reviewedRestaurant.reviews.push(review)
    //    console.log('4- updated reviewed restaurant', reviewedRestaurant)
    //  let updatedRestaurants = Object.assign([], state.restaurants)
    //    console.log('5- list of all rest', updatedRestaurants)
    //  updatedRestaurants[idx] = reviewedRestaurant
    //    console.log('6- list of all rest with updated one', updatedRestaurants)
      return { ...state, reviews: state.reviews.concat(review)  }

      case 'DELETE_REVIEW':
        console.log('Stepts on deleting review: ', 'state', state, 'action', action)
    //  reviewedRestaurant = Object.assign({}, state.restaurants.find(restaurant => restaurant.id === action.restaurantId))
    //    console.log('1- reviewed restaurant', reviewedRestaurant)
    //  idx = state.restaurants.findIndex(restaurant => restaurant.id  === action.restaurantId)
    //    console.log('2- index of reviewed restaurant', idx)
    //  updatedRestaurants = Object.assign([], state.restaurants)
    //    console.log('3- list of all rest', updatedRestaurants)
    //  updatedRestaurants[idx].reviews = reviewedRestaurant.reviews.filter(review => review.id !== action.id)
    //    console.log('4- list of all reviews from specific restaurant', updatedRestaurants[idx])
    console.log('delete review', 'state', state, 'action', action)
    return { ...state, reviews: state.reviews.filter(review => review.id !== action.id)}

      default:
      return state;
    }
  };
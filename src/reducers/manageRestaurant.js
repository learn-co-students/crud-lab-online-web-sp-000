import cuid from 'cuid';
export const cuidFn = cuid;


// export default function manageRestaurants(state, action) {

// }

// export default function manageRestaurants(state = {
//     restaurants: []
// }, action) {
//     switch (action.type) {
//         case 'ADD_RESTAURANTE':
//             const restaurant = {
//                 id: cuid(),
//                 text: action.text
//             }
//             return { ...state, restaurantes: [...state.restaurantes, restaurant]}
            
//             case 'DELETE_RESTAURANTE':
//                 const restaurantes = state.restaurantes.filter(restaurant => restaurant.id !== action.id)
//                 return { restaurantes }

//                 default:
//                     return state;
//     }
// };



// export default function manageRestaurants(state = {
//     restaurants: []
//   }, action) {
//     let restaurant
  
//     switch(action.type) {
  
//       case "ADD_RESTAURANT":
//         restaurant = {
//           id: cuid(),
//           text: action.name,
//           reviews: []
//         }
//         return {...state, restaurants: [...state.restaurants, restaurant]}
  
//       case "DELETE_RESTAURANT":
  
//         return {...state, restaurants: state.restaurants.filter(restaurant=> restaurant.id !== action.id)}
  
//       case "ADD_REVIEW":
//         const review = {
//           id: cuid(),
//           text: action.text,
//           restaurantId: action.restaurantId
//         }
//         return {
//           ...state,
//           restaurants: state.restaurants.map(restaurant=> {
//             if (restaurant.id === action.restaurantId) {
//               return {...restaurant, reviews: [...restaurant.reviews, review]}
//             } else {
//               return restaurant
//             }
//         })
//       }

//     case "DELETE_REVIEW":
//       console.log(action.review)
//       let {id, restaurantId} = action.review
//       return {
//         ...state,
//         restaurants: state.restaurants.map(restaurant=> {
//           if (restaurant.id === restaurantId) {
//             return {...restaurant, reviews: restaurant.reviews.filter(review=> review.id !== id)}
//           } else {
//             return restaurant
//           }
//         })
//       }

//     default:
//       return state
//   }
// }



export default function manageRestaurants(state = {restaurants: [], reviews: []}, action)
{
  switch (action.type) {

    case 'ADD_RESTAURANT':

    const restaurant = { text: action.text, id: cuidFn() };
    return {
      ...state, restaurants: [ ...state.restaurants, restaurant]
    }

    case 'DELETE_RESTAURANT':
    const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
    return { ...state, restaurants}

    case 'ADD_REVIEW':

    const review = {
      text: action.review.text,
      restaurantId: action.review.restaurantId,
      id: cuidFn()
    };

    return { ...state, reviews: [...state.reviews, review]}

    case 'DELETE_REVIEW':
    const reviews = state.reviews.filter(review =>
      review.id !== action.id
    );
    return {...state, reviews }

    default:
    return state;


}	  }

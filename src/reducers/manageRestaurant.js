import cuid from 'cuid';


export default function manageRestaurants(state = {
    restaurants:[],
    reviews:[]
    
    }, action) {
    switch(action.type){
     case'ADD_RESTAURANT':
     return{...state, restaurants:[...state.restaurants,{id:cuid(),text: action.payload}]}  
default:
    return state 
}
}

// import cuid from 'cuid';
// export const cuidFn = cuid;

// export default function manageRestaurants(state = {
//   restaurants: [],
//   reviews: [],
// }, action) {
//   switch (action.type) {

//     case 'ADD_RESTAURANT':

//       const restaurant = { text: action.text, id: cuidFn() };
//       return {
//         ...state,
//         restaurants: [ ...state.restaurants, restaurant]
//       }

//     }
// }
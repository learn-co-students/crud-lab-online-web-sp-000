import cuid from 'cuid';

// const initialState = {
// restaurants:[],
// reviews:[]

// }



export default function manageRestaurants(state = {
    restaurants:[],
    reviews:[]
    
    }, action) {
    switch(action.type){
    case'ADD_RESTAURANT':
    return{...state, restaurants:[...state.restaurants,{id:cuid(),name: action.payload}]} // 

}
}

import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: []
}, action) {

    //console.log(action)

    switch(action.type){
        case 'ADD_RESTAURANT':
            console.log(action)
        const restaurant = {
            id: cuid(), 
            
            text: action.text
            
        }
        console.log(restaurant)
        return {...state, restaurants: [...state.restaurants, restaurant]}

        case 'DELETE_RESTAURANT':

            return {...state, restaurants: state.restaurants.filter(restaurant=> restaurant.id !== action.id)}
            
        
        default:
            return state
    }
    

}

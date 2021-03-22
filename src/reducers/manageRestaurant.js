import cuid from 'cuid';

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    let idx 

    switch(action.type) {
        case "ADD_RESTAURANT":
            let restaurant = {text: action.text, id: cuid(), reviews: [] }
            return { ...state, restaurants: [...state.restaurants, restaurant]}

        case "DELETE_RESTAURANT":
            idx = state.restaurants.findIndex( restaurant => restaurant.id === action.id )
            return { ...state, restaurants: state.restaurants.slice(0, idx).concat(state.restaurants.slice(idx + 1))}

        case "ADD_REVIEW":
            let review = {...action.review, id: cuid() }
            return { ...state, reviews: [...state.reviews, review] }

        case "DELETE_REVIEW":
            idx = state.reviews.findIndex( review => review.id === action.review.id )
            return { ...state, reviews: state.reviews.slice(0, idx).concat(state.reviews.slice(idx + 1))}
        
            default: 
            return state
    }
}

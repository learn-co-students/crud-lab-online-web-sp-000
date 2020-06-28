
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [], reviews: []
}, action) {
    let matchingRestaurant;
    let index;
    switch(action.type){
        case 'ADD_RESTAURANT':
            return {
                ...state,
                restaurants: state.restaurants.concat({
                    id: cuid(),
                    text: action.text,
                    reviews: []
                })
            }
        case 'DELETE_RESTAURANT':
            return {
                ...state,
                restaurants: state.restaurants.filter(restaurant =>
                    restaurant.id !== action.id
                )
            }

        case 'ADD_REVIEW':
            index = state.restaurants.findIndex(restaurant =>
                restaurant.id === action.review.restaurantId
            );
            console.log(state)
            matchingRestaurant = state.restaurants[index];
            if(matchingRestaurant == undefined){
                return state;
            }
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }

            return {
                restaurants: [
                    ...state.restaurants.slice(0, index),
                    {
                        ...matchingRestaurant,
                        reviews: matchingRestaurant.reviews.concat(review)
                    },
                    ...state.restaurants.slice(index + 1)
                ],
                reviews: state.reviews.concat(review)
            }

        case 'DELETE_REVIEW':
            index = state.restaurants.findIndex(restaurant =>
                restaurant.id === action.restaurantId
            );
            matchingRestaurant = state.restaurants[index];

            return {
                restaurants: [
                    ...state.restaurants.slice(0, index),
                    {
                        ...matchingRestaurant,
                        reviews: matchingRestaurant.reviews.filter(review => 
                            review.id !== action.id    
                        )
                    },
                    ...state.restaurants.slice(index + 1)
                ],
                reviews: state.reviews.filter(review => review.id !== action.id)
            }

        default:
            return state
    }
}

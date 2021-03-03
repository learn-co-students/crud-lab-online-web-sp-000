import cuid from 'cuid';
export const cuidFn = cuid;

function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
}, action) {
    switch (action.type) {
        
        case 'ADD_RESTAURANT':
            const restaurant = { id: cuidFn(), text: action.text};
            return { ...state, 
                restaurants: [...state.restaurants, restaurant ] 
            }
            // defining a var that will contain the newly added restaurant
            // because a restaurant instance must be created with an id and text, we specify id and text keys and set them equal to the cuid functionality that we are importing and the text that the user entered.
            // returning back into state the group of restaurants that now includes the newly added restaurant

            // the return syntax reflects the inheritance structure...state is topmost, then restaurants, then a single restaurant

        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            return { ...state, restaurants }
            // defining a var that will be what the list of restaurants is after the selected id is removed.
            // from within the state-contained restaurants, we are filtering the list to only include ones that do NOT match the id of the restaurant that has been selected to be deleted.
            // returning to state the updated list of retained restaurants 

        case 'ADD_REVIEW':
            const review = {
                text: action.review.text, 
                restaurantId: action.review.restaurantId, 
                id: cuidFn()
            };
            return { ...state, 
                reviews: [...state.reviews, review ] 
            }
        
        case 'DELETE_REVIEW':
            const reviews =
                state.reviews.filter(review => review.id !== action.id);
                return {...state, reviews }

        default:
            return state;
    }
};

export default manageRestaurants;
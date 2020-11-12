import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    
    switch (action.type) {
     
        case 'ADD_RESTAURANT':
 
            const rest = {
            
                id: cuid(),
                text: action.payload
            };
          
               return {...state, restaurants: [...state.restaurants, rest]};


        case 'DELETE_RESTAURANT':
            return {...state, restaurants: state.restaurants.filter(rest => rest.id !== action.payload )};

        case 'ADD_REVIEW':
         
            const rev = {...action.payload,
            id: cuid() }
            return {...state, reviews: [...state.reviews, rev]};

        case 'DELETE_REVIEW':
            return {...state, reviews: [...state.reviews.filter(rev => rev.id !== action.payload)]};
           

    default: 
        return state;
    }
}

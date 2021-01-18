import cuid from 'cuid';

export default function manageRestaurants(state = {
    text: []
}, action) {    
    switch (action.type) {

        case 'ADD_RESTAURANT':
            const text = {
                id: cuid(),
                text: action.text
            }
            console.log({...state,
            text: [
                { text }
            ]});

        default:
            return state;
    } 
}

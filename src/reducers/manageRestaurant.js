import cuid from 'cuid';
import manageReviews from './manageReview';
import { combineReducers } from 'redux';

function firstManageRestaurant(state = [], action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            return [...state, {id: cuid(), text: action.text}];
        case 'DELETE_RESTAURANT':
            return state.filter(r => {return r.id !== action.id});
        default:
            return state;
    }
};

const manageRestaurant = combineReducers({
    restaurants: firstManageRestaurant,
    reviews: manageReviews
});

export default manageRestaurant;

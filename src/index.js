import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurants from './reducers/manageRestaurant'
import manageReviews from './reducers/manageReview'

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews,
})

// const store = createStore(rootReducer)
const store = createStore(manageRestaurants)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

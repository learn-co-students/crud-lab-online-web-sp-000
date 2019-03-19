import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import manageRestaurant from "./reducers/manageRestaurant";
import manageReview from "./reducers/manageReview";
import { combineReducers } from "redux";

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(manageRestaurant);
// const store = createStore(
//   combineReducers({ restaurants: manageRestaurant, reviews: manageReview })
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

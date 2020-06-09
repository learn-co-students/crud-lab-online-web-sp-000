// * Restaurants
export function addRestaurant(text) {
  return {
    type: "ADD_RESTAURANT",
    text
  };
}

export function deleteRestaurant(id) {
  return {
    type: "DELETE_RESTAURANT",
    id
  };
}

// * Reviews
export function addReview(text, restaurantId) {
  return {
    type: "ADD_REVIEW",
    review: {
      text,
      restaurantId
    }
  };
}

export function deleteReview(id) {
  return {
    type: "DELETE_REVIEW",
    id
  };
}

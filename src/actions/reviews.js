// reviews action creators

function addReview(text, restaurantId) {
  return {
    type: 'ADD_REVIEW',
    review: {
      text: text,
      restaurantId: restaurantId
    }
  }



};

function deleteReview(reviewId) {
  return {
    type: 'DELETE_REVIEW',
    reviewId: reviewId
  }

};


export { addReview, deleteReview };

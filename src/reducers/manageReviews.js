import cuid from "cuid";

export default function manageReviews(reviews = [], action) {
  switch (action.type) {
    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        text: action.text,
        restaurantId: action.restaurantId,
      };
      return [...reviews.concat(review)];

    case "DELETE_REVIEW":
      console.log(action);
      return [...reviews.filter((review) => review.id !== action.id)];

    default:
      return reviews;
  }
}

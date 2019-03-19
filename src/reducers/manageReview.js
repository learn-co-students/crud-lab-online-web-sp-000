import cuid from "cuid";
export const cuidFn = cuid;

export default function manageReviews(state = { reviews: [] }, action) {
  switch (action.type) {
    case "ADD_REVIEW":
      const newRev = { text: action.text, id: cuid() };
      return { reviews: [...state.reviews, newRev] };
    case "DELETE_REVIEW":
      return {
        reviews: state.reviews.filter(r => r.id !== action.reviewID)
      };
    default:
      return state;
  }
}

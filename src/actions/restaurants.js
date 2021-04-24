//ACTION CREATORS of same name as the "types" in reducer
function addRestaurant(restaurantObj) {
  return {
    type: 'ADD_RESTAURANT',
    restaurant: restaurantObj
  }
}

function deleteRestaurant(restaurantId) {
  return {
    type: 'DELETE_RESTAURANT',
    id: restaurantId
  }
}






export  { addRestaurant, deleteRestaurant};

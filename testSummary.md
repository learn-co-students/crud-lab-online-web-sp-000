  RestaurantInput
    1) has an text input field
    2) has an initial state with text key set to empty string
    3) changes the state on a keydown
    4) updates the state of the store after submitting the form

  Restaurants Component
    5) displays a list of restaurant components

  Restaurant Component
    ✓ displays the appropriate text
    ✓ renders an li

  RestaurantInput Component with Redux
    6) has an unique id property for each element

  Restaurant Component with Redux
    7) has the restaurant as a prop
    8) has a button that dispatches a DELETE_RESTAURANT action with the proper id when clicked
    9) updates the state of the store to remove the component

  ReviewInput Component
    10) displays the ReviewInput component as a child of each Restaurant Component
    11) has a text input field
    12) has an initial state with text key set to empty string
    13) has changes the state on a keydown
    14) adds a review to the store when the form is submitted
    15) updates the state of the store after submitting the form
    16) sets a property of restaurantId on the review component from the parent components id
    17) associates the review with the restaurant with a foreign key on the review

  Reviews Component
    18) is a child of the ReviewsContainer component
    19) displays a review for when it is associated with the restaurant
    20) does not display any review unassociated with the restaurant
    21) has an unique id property that for each element
    22) has a button that dispatches a DELETE_REVIEW action when clicked
    23) updates the state of the store to remove the component


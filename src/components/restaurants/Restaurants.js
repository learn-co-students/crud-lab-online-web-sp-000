import React from 'react';
import Restaurant from './Restaurant';

const Restaurants = props => {
  const restaurants = props.restaurants.map((r) => <Restaurant key={r.id} id={r.id} restaurant={r} delete={props.deleteRestaurant} />
  )

  return(
    <div>
      <ul>
        {restaurants}
      </ul>
    </div>
  );
}

export default Restaurants;
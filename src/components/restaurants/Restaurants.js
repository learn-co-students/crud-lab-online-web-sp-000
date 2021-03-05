import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

    render() {
        const { restaurants, deleteRestaurant } = this.props;

        // first attempt:
        // const restaurantList = restaurants.map(restaurant => <Restaurant key={rest.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant} />)

        // AAQ solution: also suggested `defaultProps`
        // const restaurantList = restaurants && restaurants.map(restaurant => <Restaurant key={rest.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant} />)

        // github solution:
        const restaurantList = restaurants.map(restaurant => {
            return (
                <Restaurant
                    key={restaurant.id}
                    restaurant={restaurant}
                    deleteRestaurant={deleteRestaurant}
                />
            )
        });

        return(
        <ul>
            {restaurantList}
        </ul>
        );
    }
};

export default Restaurants;

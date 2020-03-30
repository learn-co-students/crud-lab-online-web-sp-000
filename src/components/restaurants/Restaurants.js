import React, { Component } from 'react';
/* code change */
import Restaurant from './Restaurant'

class Restaurants extends Component {

    render() {
        const { restaurants, deleteRestaurant } = this.props;

        const restaurantList = restaurants.map(rest => <Restaurant key={rest.id} restaurant={rest} deleteRestaurant={deleteRestaurant} />)
        // const restaurantList = restaurants.map(restaurant => {
        //     return (
        //         <Restaurant
        //             key={restaurant.id}
        //             restaurant={restaurant}
        //             deleteRestaurant={deleteRestaurant}
        //         />
        //     )
        // });

        return(
        <ul>
            {restaurantList}
        </ul>
        );
    }
};

export default Restaurants;

/*
From the parent Restaurants.js:

[...]

const mapStateToProps = state => ({
    restaurants: state.restaurants
})


const mapDispatchToProps = dispatch => ({
    addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text }),
    deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id })
})

[...]

*/

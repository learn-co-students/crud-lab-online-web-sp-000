import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
    render() {
        const { reviews, restaurantId, deleteReview } = this.props
        const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId)
        const restaurantReviews = associatedReviews.map((rev, idx) => {
            return <Review key={idx} review={rev} deleteReview={deleteReview} />
        })

        return (
        <ul>
            { restaurantReviews }
        </ul>
        );
    }
};

export default Reviews;

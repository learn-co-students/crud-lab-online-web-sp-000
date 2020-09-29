//THIS COMPONENT HANDLES WHEN SOMEONE DELETES A REVIEW
//ON CLICK. HAS DELETE BUTTON TO DELETE REVIEW.


import React, { Component } from 'react';

class Review extends Component {

    handleOnClick = () => {
        this.props.deleteReview(this.props.review.id)
    }

    render() {
        const { review } = this.props

        return (
        <div>
            <li>{ review.text }</li>
            <button onClick={this.handleOnClick}>Delete Review</button>
        </div>
        );
    }

};

export default Review;

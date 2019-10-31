import React, { Component } from 'react';

const Review = props => {


    return (

      <div>

        <li>
          {props.review.text}
       
        <button onClick={() => 
          props.deleteReview(props.review.id)}> DELETE </button> 
        </li>
      </div>
    );


  }



export default Review;
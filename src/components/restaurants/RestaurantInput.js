//a RestaurantInput component that allows a user to create new restaurants. Your form should have two inputs: a text input to enter the name of the restaraunt, and an input with type equal submit

import React, { Component } from 'react';

class RestaurantInput extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addRestaurant(this.state.text)
        this.setState({
            test: ''
        })
    }

    //renders form to the page 
    render() {
        return (
        <div>
<h1>RESTAURANT REVIEWER!</h1>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input
                type="text"
                value={this.state.text}
                onChange={(event) => this.handleOnChange(event)}
            />

            <input type="submit"/>
        </form>
        </div>
        );
    }
};

export default RestaurantInput;
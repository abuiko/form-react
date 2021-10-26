import React, { Component } from 'react'
import FormUserDetails from "./FormUserDetails"


export class UserForm extends Component {

    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    }

    // Proceed to the nex step
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    // Go back to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    // { handleChange = input => e => {
    //     this.setState({ [input]: value })
    // }


    render() {
        const { step } = this.state
        const { firstName, lastName, email, occupation, city, bio } = this.state
        const values = { firstName, lastName, email, occupation, city, bio }

        switch (step) {
            case 1:
                return (
                    <div>
                        <FormUserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </div>
                )
            case 2:
                return (
                    <h1>FormPersonalDetails</h1>
                )
            case 3:
                return (
                    <h1>Confirm</h1>
                )

            case 4:
                return (
                    <h1>Success</h1>
                )
        }
    }



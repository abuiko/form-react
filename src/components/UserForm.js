import React, { Component } from 'react'
import { FormUserDetails } from "./FormUserDetails"
import { FormPersonalDetails } from './FormPersonalDetails'
import { Confirm } from './Confirm'
import { Success } from './Success'


class UserForm extends Component {

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

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }


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
                    <div>

                        <FormPersonalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </div>
                )
            case 3:
                return (
                    <div>

                        <Confirm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                        />
                    </div>
                )

            case 4:
                return (
                    <Success />
                )

            default:
        }
    }
}

export default UserForm
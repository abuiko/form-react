import React, { Component } from 'react'

export class userForm extends Component {

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
        const { name, value, type, checked } = event.target
        this.setState({
            [name]: value
        })
    }

    // { handleChange = input => e => {
    //     this.setState({ [input]: value })
    // }


    render() {
        return (
            <div>

            </div>
        )
    }
}

export default userForm

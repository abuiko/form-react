import React, { Component } from "react"







export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStop()
    }

    render() {
        const { values } = this.props

        return (
            <div></div>
        )
    }
}